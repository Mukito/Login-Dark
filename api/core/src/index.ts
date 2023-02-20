import { ServerlessAdapter } from '@h4ad/serverless-adapter';
import { FastifyFramework } from '@h4ad/serverless-adapter/lib/frameworks/fastify';
import { DefaultHandler } from '@h4ad/serverless-adapter/lib/handlers/default';
import { PromiseResolver } from '@h4ad/serverless-adapter/lib/resolvers/promise';
import { ApiGatewayV2Adapter } from '@h4ad/serverless-adapter/lib/adapters/aws';
import app from './server';

export const handler = ServerlessAdapter.new(app)
    .setFramework(new FastifyFramework())
    .setHandler(new DefaultHandler())
    .setResolver(new PromiseResolver())
    .addAdapter(new ApiGatewayV2Adapter())
    .build();