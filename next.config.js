const withCSS = require("@zeit/next-css");
module.exports = withCSS({
  cssModules: true,
  exportPathMap: () => ({
    "/dai-ly": { page: "/agency/agency" },
    "/dai-ly/them-moi": { page: "/agency/create/AgencyCreate" }
  })
});
