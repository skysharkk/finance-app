import { PrismaClient } from '@prisma/client';
import { FastifyPluginAsync } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

declare module 'fastify' {
  interface FastifyInstance {
    db: PrismaClient;
  }
}

const dbPlugin: FastifyPluginAsync = fastifyPlugin(async (server) => {
  const prisma = new PrismaClient();
  await prisma.$connect();
  server.decorate('prisma', prisma);
  server.addHook('onClose', async (server) => {
    await server.db.$disconnect();
  });
});

export default dbPlugin;
