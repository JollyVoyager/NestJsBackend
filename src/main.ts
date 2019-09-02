import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import * as config from 'config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const serverConfig = config.get('server');
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);
  //const hostDomain = AppModule.isDev ? `${ AppModule.host }: ${ AppModule.port}`: AppModule.host;
  const options = new DocumentBuilder()
        .setTitle('BackEnd_project')
        .setDescription('BackEnd_roject')
        .setVersion('1.0')
        .addTag('BackEnd_roject')
        .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  const port = process.env.PORT || serverConfig.port;
  await app.listen(port);
  logger.log(`Application listening on port ${port} `);
}
bootstrap();
