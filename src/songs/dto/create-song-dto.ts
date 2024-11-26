import {
  ArrayMinSize,
  ArrayNotEmpty,
  IsArray,
  IsDateString,
  IsMilitaryTime,
  IsNotEmpty,
  IsString,
} from "class-validator";

export class CreateSongDTO {
  // ! there is class validation
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  @ArrayNotEmpty()
  readonly artiest: string[];

  @IsNotEmpty()
  @IsDateString()
  readonly releasedDate: Date;

  @IsNotEmpty()
  @IsMilitaryTime()
  readonly duration: Date;
}
