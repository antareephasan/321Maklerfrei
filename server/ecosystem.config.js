module.exports = {
  apps : [{
    name: 'server',
    script: 'src/index.js',
    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT:8080,
      CLIENT_URL:'https://123provisionsfrei.de',
      SERVER_URL:'https://123provisionsfrei.de',
      MONGODB_URL:'mongodb+srv://dbUser1:test1234@cluster0.oirqj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      MONGODB_URL_TEST:'mongodb+srv://dbUser1:test1234@cluster0.oirqj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      JWT_SECRET:'@cluster0.oirqjhallo@123provisionsfrei.demongodb.net/myFirst',
      JWT_ACCESS_EXPIRATION_MINUTES:30,
      JWT_REFRESH_EXPIRATION_DAYS:30,
      // SMTP_HOST:'mx2e81.netcup.net',
      // SMTP_PORT:587,
      // SMTP_USERNAME:'hallo@123provisionsfrei.de',
      // SMTP_PASSWORD:'2G3f4f8p11!',
      EMAIL_FROM:'123provisionsfrei<hallo@123provisionsfrei.de>',
      STRIPE_SECRET:'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',
      PAYPAL_CLIENT_ID:'ASVNHwku37ZlIhe1Hjoy0kepP6gLzBhXkmElq1AV4E2g44XAy38ACAqhNWsGij-swPWPecUweldQvhrE',
      PAYPAL_CLIENT_SECRET:'EI5l5N4ogjwtCiAasjVEJAXtrFaXmhAUIoEXfuAq0TbEQR89AvrQeaQSaFqvYhSauLOArAnQyBZ7zZ4G',
      FLOWFACT_TOKEN:'eaac8b60-0bb5-48a3-83a6-52a5b2b051cc',
      IMMOSCOUT24_ID:'eee962a5-ba3e-4063-8a34-40e89e8401a4',
      WORDPRESS:'4a343c74-0ebc-4ce1-a390-da13cb0612b7',
      EBAY_KLEINANZEIGEN_ID:'46ffe36c-e57d-4c29-865b-968863085855',
      IMMOWELT_IMMONET_ID:'d8c75889-d5fe-4a9f-9650-f40989ecac35',
      AWS_ACCESS_KEY_ID:'AKIASEW3RLQCTKWB6Y6J',
      AWS_SECRET_ACCESS_KEY:'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'
    }
  }],
  deploy : {
    production : {
      user : 'ubuntu',
      host : '18.159.39.115',
      ref  : 'origin/master',
      repo : 'git@github.com:123provisionsfrei/server.git',
      path : '/home/ubuntu/server',
      "post-deploy" : 'pm2 reload ecosystem.config.js'
    }
  }
};