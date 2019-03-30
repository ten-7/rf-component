module.exports = {
  apps: [{
    name: 'tutorial-2',
    script: './server/index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: '18.219.194.225',
      key: '~/.ssh/AWS/JBeckerFEC.pem',
      ref: 'origin/master',
      repo: 'https://github.com/axe-center/JB-Review-Component.git',
      path: '/home/ubuntu/ReviewComponent',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}