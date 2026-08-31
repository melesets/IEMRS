import React, { useRef, useCallback, useState } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const TiltCard: React.FC<TiltCardProps> = ({ 
  children, 
  className = '', 
  onClick
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)');
  const [shinePosition, setShinePosition] = useState({ x: 50, y: 50 });
  const rafRef = useRef<number | null>(null);
  const targetRef = useRef({ rotateX: 0, rotateY: 0, scale: 1 });
  const currentRef = useRef({ rotateX: 0, rotateY: 0, scale: 1 });

  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
  };

  const animate = useCallback(() => {
    const ease = 0.15;
    currentRef.current.rotateX = lerp(currentRef.current.rotateX, targetRef.current.rotateX, ease);
    currentRef.current.rotateY = lerp(currentRef.current.rotateY, targetRef.current.rotateY, ease);
    currentRef.current.scale = lerp(currentRef.current.scale, targetRef.current.scale, ease);
    
    setTransform(
      `perspective(600px) rotateX(${currentRef.current.rotateX}deg) rotateY(${currentRef.current.rotateY}deg) scale(${currentRef.current.scale})`
    );

    if (
      Math.abs(currentRef.current.rotateX - targetRef.current.rotateX) > 0.01 ||
      Math.abs(currentRef.current.rotateY - targetRef.current.rotateY) > 0.01 ||
      Math.abs(currentRef.current.scale - targetRef.current.scale) > 0.001
    ) {
      rafRef.current = requestAnimationFrame(animate);
    }
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (max ±18 degrees)
    const rotateY = ((x - centerX) / centerX) * 18;
    const rotateX = -((y - centerY) / centerY) * 18;

    targetRef.current = { rotateX, rotateY, scale: 0.96 };

    // Update shine position
    const shineX = (x / rect.width) * 100;
    const shineY = (y / rect.height) * 100;
    setShinePosition({ x: shineX, y: shineY });

    if (rafRef.current === null) {
      rafRef.current = requestAnimationFrame(animate);
    }
  }, [animate]);

  const handleMouseLeave = useCallback(() => {
    targetRef.current = { rotateX: 0, rotateY: 0, scale: 1 };
    setShinePosition({ x: 50, y: 50 });
    if (rafRef.current === null) {
      rafRef.current = requestAnimationFrame(animate);
    }
  }, [animate]);

  const handleMouseEnter = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  React.useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative cursor-pointer transition-all duration-200 ${className}`}
      style={{
        transform,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.1s ease-out',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
    >
      {children}
      {/* Shine overlay */}
      <div
        className="absolute inset-0 rounded-[18px] pointer-events-none overflow-hidden"
        style={{
          background: `radial-gradient(circle at ${shinePosition.x}% ${shinePosition.y}%, rgba(255,255,255,0.3) 0%, transparent 50%)`,
        }}
      />
    </div>
  );
};
