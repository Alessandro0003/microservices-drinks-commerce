import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'drinks-track',
        brokers: ['localhost:29092'],
      }
    }
  })

  app.startAllMicroservices().then(() => {
    console.log('[Drinks-tracks] Microservice running!')
  })

  app.listen(3334).then(() => {
    console.log('[Drinks-tracks] HTTP server running!')
  })
}

bootstrap()
