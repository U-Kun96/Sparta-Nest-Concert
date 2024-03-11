import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Role } from "../userRole.type";
export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: "이름을 입력해주세요" })
  readonly name: string;

  @IsNumber()
  @IsNotEmpty({ message: "나이를 입력해주세요" })
  readonly age: number;

  @IsString()
  @IsNotEmpty({ message: "성별을 입력해주세요" })
  readonly gender: string;

  @IsString()
  @IsNotEmpty({ message: "이메일을 입력해주세요" })
  readonly email: string;

  @IsString()
  @IsNotEmpty({ message: "비밀번호를 입력해주세요" })
  readonly password: string;

  @IsString()
  readonly phoneNumber: number; // Nullable한 값일 때 사용하는 데코레이터가 없나..?

  @IsString()
  @IsNotEmpty({ message: "권한을 입력해주세요" })
  readonly role: Role;
}
