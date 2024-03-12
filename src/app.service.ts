import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  signUp: any;
  getHello(): string {
    return 'Hello World!';
  }
}
