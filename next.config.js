const { parsed } = require("dotenv").config();
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { env: parsed }) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  return {
    env: {
      REDIRECT_URI: isDev
        ? "http://localhost:3000/api/callback"
        : "http://localhost:3000/api/callback",
      POST_LOGOUT_URI: isDev
        ? "http://localhost:3000/secret"
        : "http://localhost:3000/secret",
      AUTH0_SCOPE: "openid profile",
      SERVER_URL: isDev ? "http://localhost:3000" : "http://localhost:3000",
    },
  };
};
