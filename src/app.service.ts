import { Inject, Injectable } from "@nestjs/common";
import { DevConfigService } from "./common/providers/DevConfigService";

@Injectable()
export class AppService {
  constructor(
    private devConfigService: DevConfigService,
    @Inject("CONFIG") private config: { port: string },
  ) {}
  getHello(): string {
    return `Hello World! Tansim Ahmed Tashdid ${this.devConfigService.getDBHOST()} port is ${this.config.port} `;
  }
}
