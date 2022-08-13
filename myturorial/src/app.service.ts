import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Akwaba NestJS in Action 2022 !';
  }
}
