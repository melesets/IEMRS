module.exports = {
  apps: [{
    name: 'iemrs',
    cwd: 'C:\\App file\\IEMRS\\server',
    script: 'server.js',
    interpreter: 'node',
    exec_mode: 'fork',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 4002
    },
    merge_logs: true,
    time: true
  }]
};
