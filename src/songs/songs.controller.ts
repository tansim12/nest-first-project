import { Controller, Get } from "@nestjs/common";

@Controller("songs")
export class SongsController {
  @Get()
  findAll() {
    return "Find All Songs end points";
  }
}
