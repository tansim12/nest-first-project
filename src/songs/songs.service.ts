import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

@Injectable()
export class SongsService {
  // local db
  // local array

  private readonly songs = [];

  create(song) {
    this.songs.push(song);
    return {
      data: song,
    };
  }
  findAll() {
    // throw new HttpException("There is a error", HttpStatus.FORBIDDEN);
    return this.songs;
  }
}
