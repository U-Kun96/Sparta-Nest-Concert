import { compare, hash } from 'bcrypt';
import _ from 'lodash';
import { Repository } from 'typeorm';

import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from './entities/user.entity';

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
    const hashedPassword = await hash(password, 10);
    await this.userRepository.save({
      email, password:hashedPassword
    })
  }

  async login(email:string, password:string) {
    const user = await this.userRepository.findOne({
      select: ['userId', 'email', 'password'],
      where: {email}
    });
    if(_.isNil(user)) {
      throw new UnauthorizedException('이메일을 확인해주세요')
    }

    if(!(await compare(password, user.password))) {
      throw new UnauthorizedException('비밀번호가 틀렸습니다')
    }

    const payload = {email, sub: user.userId};
    return {
      access_token: this.jwtService.sign(payload)
    }
  }

  async findByEmail(email:string) {
    return await this.userRepository.findOneBy({email})
  }

}


