import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { SongsModule } from "./songs/songs.module";
import { LoggerMiddleware } from "./common/middleware/logger/logger.middleware";
import { SongsController } from "./songs/songs.controller";

@Module({
  imports: [SongsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("songs"); // options 1 implement all songs route
    consumer.apply(LoggerMiddleware).forRoutes(
      {
        path: "songs",
        method: RequestMethod.POST,
      },
      {
        path: "songs",
        method: RequestMethod.GET,
      },
      {
        path: "songs/:id",
        method: RequestMethod.GET,
      },
      {
        path: "songs/:id",
        method: RequestMethod.PUT,
      },
      {
        path: "songs/:id",
        method: RequestMethod.DELETE,
      },
    );  // spesific path and method 
    consumer.apply(LoggerMiddleware).forRoutes(SongsController); // this middleware apply for SongsController all routes
  }
}
