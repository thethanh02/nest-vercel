import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import * as cookieParser from 'cookie-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule, {
  //   cors: { origin: clientUrl, credentials: true },
  // });
  const app = await NestFactory.create(AppModule);
  // middleware
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  // app.use(helmet());
  // app.use(cookieParser());
  const config = new DocumentBuilder()
    .setTitle('Test')
    .setDescription('Test API description')
    .setVersion('0.1')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3000);
}
bootstrap();
