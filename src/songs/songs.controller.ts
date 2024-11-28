import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Scope,
} from "@nestjs/common";
import { SongsService } from "./songs.service";
import { CreateSongDTO } from "./dto/create-song-dto";

@Controller({
  path: "songs",
  scope: Scope.REQUEST,
})
export class SongsController {
  constructor(private songService: SongsService) {}

  // crate
  @Post()
  create(@Body() body: CreateSongDTO) {
    return this.songService.create(body);
  }

  // find all
  @Get()
  findAll() {
    try {
      return this.songService.findAll();
    } catch (error) {
      console.log({ error });

      throw new HttpException(
        "Server Error",
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error,
        },
      );
    }
  }

  @Put(":id")
  update(
    @Param(
      "id",
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return `Song Update ${id}`;
  }
  @Delete(":id")
  delete(@Param("id") id) {
    return `Song Delete ${id}`;
  }

  @Get(":id")
  findOne(
    @Param(
      "id",
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return `Song Get ${id}`;
  }
}
