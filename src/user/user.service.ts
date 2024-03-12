import { ConflictException, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
  constructor(
    @InjectableRepository(User)
    private userRepository: Repository<User>
    private readonly jwtService: JwtService
  ) {}

  async signIn(email: string, password: string) {
    const existingUser = await this.findByEmail(email)
    if(existingUser) {
      throw new ConflictException(
        "이미 가입된 이메일입니다."
      )
    }
  }
}


