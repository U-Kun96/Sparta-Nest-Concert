import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class LoginUserDto {
  @IsString()
  @IsNotEmpty({ message: "이메일을 입력해주세요" })
  readonly email: string;

  @IsNumber()
  @IsNotEmpty({ message: "비밀번호를 입력해주세요" })
  readonly password: number;
}
