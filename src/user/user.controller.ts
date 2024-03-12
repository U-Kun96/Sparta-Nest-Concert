import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  UseGuards
} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { LoginUserDto } from "./dto/login-user.dto";
import { UserProfile } from "src/utils/userProfile.decorator";
import { User } from "./entities/user.entity";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  // 회원가입
  @Post("signUp")
  // req. body로 CreateUserDto에 정의된 데이터들을 입력해서 보냄
  async siginUp(@Body() createUserDto: CreateUserDto) {
    // userService에 있는 signUp메서드의 결과값을 리턴함.
    try {
      await this.userService.signUp(createUserDto.name, createUserDto.email);
      return { message: "회원가입에 성공하였습니다." };
    } catch (error) {
      throw new HttpException("회원가입에 실패하였습니다.", HttpStatus.BAD_REQUEST);
    }
  }

  // 로그인
  @Post("login")
  async login(@Body() loginUserDto: LoginUserDto) {
    try {
      await this.userService.login(loginUserDto.email, loginUserDto.password);
      return { message: "로그인에 성공하였습니다." };
    } catch (error) {
      throw new HttpException("로그인에 실패했습니다.", HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(AuthGuard("jwt"))

  // 프로필 보기(상세조회)
  @Get(":userId")
  getUserProfile(@UserProfile() user: User) {
    return { email: user.email };
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.userService.remove(+id);
  }
}
