module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '99bdd56b7b21d31466171610d8773ee6'),
  },
});
