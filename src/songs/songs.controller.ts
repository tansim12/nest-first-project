import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { SongsService } from "./songs.service";
import { CreateSongDTO } from "./dto/create-song-dto";

@Controller("songs")
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
    return this.songService.findAll();
  }

  @Put(":id")
  update(@Param("id") id) {
    return `Song Update ${id}`;
  }
  @Delete(":id")
  delete(@Param("id") id) {
    return `Song Delete ${id}`;
  }

  @Get(":id")
  findOne(@Param("id") id) {
    return `Song Get ${id}`;
  }
}
