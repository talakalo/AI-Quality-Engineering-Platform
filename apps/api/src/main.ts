import "reflect-metadata";

import { NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  type NestFastifyApplication,
} from "@nestjs/platform-fastify";

import { AppModule } from "./app.module.js";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );
  app.enableShutdownHooks();
  await app.listen({
    host: process.env.HOST ?? "127.0.0.1",
    port: Number(process.env.PORT ?? 3001),
  });
}

void bootstrap();
