module.exports = {
  apps: [{
    name: 'Review-Component',
    script: './server/index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: '18.216.12.227',
      key: '~/.ssh/FEC-ryden.pem',
      ref: 'origin/test',
      repo: 'https://github.com/ten-7/rf-component',
      path: '/home/ubuntu/comp',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}