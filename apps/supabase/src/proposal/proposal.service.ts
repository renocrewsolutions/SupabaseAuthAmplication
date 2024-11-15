import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProposalServiceBase } from "./base/proposal.service.base";

@Injectable()
export class ProposalService extends ProposalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
