module.exports = {
  client: {
    output: 'src/app/generated/entity',
    includes: [__dirname + '/src/app/queries/**'],
    target: 'typescript',
    service: {
      name: 'post-io-api',
      url: 'http://localhost:3000/graphql',
    },
  },
};
