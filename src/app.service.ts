import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      message: "Servidor online seu pilantrinha"
    };
  }
}
