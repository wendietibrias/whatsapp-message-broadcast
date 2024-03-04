import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as basicAuth from 'express-basic-auth';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const env: string = configService.get<string>('app.appEnv');
  const appName: string = configService.get<string>('app.appName');
  const host = configService.get('app.host');
  const port = configService.get('app.port.api');

    // somewhere in your initialization file
    const passSwagger = process.env.SWAGGER_PASSWORD || 'bismillah';
    app.enableCors();
    app.use(
      ['/auth/docs', '/auth/docs-json'],
      basicAuth({
        challenge: true,
        users: {
          hanafi: passSwagger,
        },
      }),
    );
  
    const swaggerConfig: any = configService.get<any>('swagger.config');
    if (swaggerConfig.swaggerUI === true) {
      const swaggerConfigBuilder = new DocumentBuilder()
        .setTitle(swaggerConfig.info.title)
        .setVersion(swaggerConfig.info.version)
        .addBearerAuth(
          {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
            name: 'JWT',
            description: 'Enter JWT token',
            in: 'header',
          },
          'JWTAuth',
        )
        .build();
  
      const document = SwaggerModule.createDocument(app, swaggerConfigBuilder);
      const swaggerOptions = configService.get<any>('plugin.swagger.options');
      SwaggerModule.setup('/whatsapp/docs', app, document, {
        swaggerOptions: swaggerOptions,
      });
    }
  

  await app.listen(port,host);

  const appUrl = await app.getUrl();

  console.log(`\n`);
  console.log(`APP NAME\t: ${appName}`);
  console.log(`ENVIRONMENT\t: ${env}`);
  console.log(`RUNNING ON \t: ${appUrl}`);
  if (swaggerConfig.swaggerUI === true) {
    console.log(`SWAGGER UI\t: ${appUrl}${swaggerConfig.documentationPath}`);
  }
  console.log(`Version\t: ${require('../package.json').version }`);

}
bootstrap();
