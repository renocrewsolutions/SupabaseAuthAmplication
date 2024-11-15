import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FreelancerServiceBase } from "./base/freelancer.service.base";

@Injectable()
export class FreelancerService extends FreelancerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
