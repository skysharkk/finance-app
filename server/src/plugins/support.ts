import fp from 'fastify-plugin';

export interface SupportPluginOptions {
  test: number;
}

export default fp<SupportPluginOptions>(async (fastify) => {
  fastify.decorate('someSupport', function () {
    return 'hugs';
  });
});

declare module 'fastify' {
  export interface FastifyInstance {
    someSupport(): string;
  }
}
