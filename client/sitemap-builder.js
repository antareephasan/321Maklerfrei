require("babel-register")({
    presets: ["es2015", "react"]
  });
  const router = require('./router').default;
  const Sitemap = require('react-router-sitemap').default;
  (
     new Sitemap(router)
        .build("https://321maklerfrei.de/")
        .save('./public/sitemap.xml')
  );