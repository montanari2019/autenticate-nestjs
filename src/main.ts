import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder().setTitle("Documentação com Swagger")
    .setDescription(
      "o swagger é uma biblioteca muito conhecida no meio backend, estando disponível para diversas linguages e frameworks"
    ).setVersion('1.0')
    // .addTag('users')
    .build()

    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('docs', app, document)

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3333);
}
bootstrap();
