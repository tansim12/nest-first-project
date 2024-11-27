import { Module } from "@nestjs/common";
import { SongsController } from "./songs.controller";
import { SongsService } from "./songs.service";

// const mokSongService = {
//   findAll() {
//     return {
//       id: 1,
//       title: "other service",
//     };
//   },
// };

@Module({
  controllers: [SongsController],
  providers: [
    // SongsService
    // ! using class base providers
    {
      provide: SongsService,
      useClass: SongsService,
    },
  ],

  // providers: [
  //   // ! using value base provider
  //   {
  //     provide: SongsService,
  //     useValue: mokSongService,
  //   },
  // ],
})
export class SongsModule {}
