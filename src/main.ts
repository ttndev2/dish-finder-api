import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000; // Fall back to port 3000 if no environment variable is set
  await app.listen(port);
}
bootstrap();
