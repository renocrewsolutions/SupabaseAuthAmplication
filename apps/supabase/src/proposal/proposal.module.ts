import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProposalModuleBase } from "./base/proposal.module.base";
import { ProposalService } from "./proposal.service";
import { ProposalController } from "./proposal.controller";
import { ProposalResolver } from "./proposal.resolver";

@Module({
  imports: [ProposalModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProposalController],
  providers: [ProposalService, ProposalResolver],
  exports: [ProposalService],
})
export class ProposalModule {}
