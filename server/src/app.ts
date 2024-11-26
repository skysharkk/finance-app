import { join } from 'path';
import { fastifyAutoload, AutoloadPluginOptions } from '@fastify/autoload';
import { FastifyPluginAsync, FastifyServerOptions } from 'fastify';
import { fastifySwagger } from '@fastify/swagger';
import { fastifySwaggerUi } from '@fastify/swagger-ui';

export interface AppOptions
  extends FastifyServerOptions,
    Partial<AutoloadPluginOptions> {}
const options: AppOptions = {};

const app: FastifyPluginAsync<AppOptions> = async (
  fastify,
  opts,
): Promise<void> => {
  void fastify.register(fastifySwagger);
  void fastify.register(fastifySwaggerUi, {
    routePrefix: '/docs',
  });
  void fastify.register(fastifyAutoload, {
    dir: join(__dirname, 'plugins'),
    options: opts,
  });
  void fastify.register(fastifyAutoload, {
    dir: join(__dirname, 'routes'),
    options: opts,
  });
};
export default app;
export { app, options };
