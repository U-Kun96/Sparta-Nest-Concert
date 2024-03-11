import { IsNotEmpty, IsNumber, IsString } from "class-validator";

// 어드민의 콘서트 등록
export class CreateConcertDto {
  @IsString()
  @IsNotEmpty({ message: "공연 이름은 필수입니다." })
  readonly title: string;

  @IsString()
  @IsNotEmpty({ message: "공연 내용은 필수입니다." })
  readonly content: string;

  @IsString()
  @IsNotEmpty({ message: "아티스트는 필수입니다." })
  readonly artist: string;

  @IsNumber()
  @IsNotEmpty({ message: "가격은 필수입니다." })
  readonly price: number;

  @IsString()
  @IsNotEmpty({ message: "지역은 필수입니다." })
  readonly location: string;

  @IsString()
  @IsNotEmpty({ message: "공연 날짜는 필수입니다." })
  readonly concertDay: string;
}
