import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller("songs")
export class SongsController {
  @Post()
  create() {
    return "Song Crate ";
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
  @Get()
  findAll() {
    return "Find All Songs end points";
  }
}
