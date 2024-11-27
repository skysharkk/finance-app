import fastifyPlugin from 'fastify-plugin';
import sensible, { FastifySensibleOptions } from '@fastify/sensible';

export default fastifyPlugin<FastifySensibleOptions>(async (fastify) => {
  fastify.register(sensible);
});
