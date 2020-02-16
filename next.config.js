const withCSS = require("@zeit/next-css");
module.exports = withCSS({
  cssModules: true,
  exportPathMap: () => ({
    "/login": { page: "/login/login" },
    "/dai-ly": { page: "/agency/agency" },
    "/dai-ly/them-moi": { page: "/agency/create/AgencyCreate" },
    "/ctv":{page : "/ctv/collaborator"}
  })
});
