module.exports = {
  apps: [{
    name: 'Review-Component',
    script: './server/index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: '13.59.172.250',
      key: '~/.ssh/AWS/JBeckerFEC.pem',
      ref: 'origin/master',
      repo: 'https://github.com/axe-center/JB-Review-Component.git',
      path: '/home/ubuntu/ReviewComponent',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}