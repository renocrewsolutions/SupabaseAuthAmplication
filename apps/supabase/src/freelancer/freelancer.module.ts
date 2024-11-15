import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FreelancerModuleBase } from "./base/freelancer.module.base";
import { FreelancerService } from "./freelancer.service";
import { FreelancerController } from "./freelancer.controller";
import { FreelancerResolver } from "./freelancer.resolver";

@Module({
  imports: [FreelancerModuleBase, forwardRef(() => AuthModule)],
  controllers: [FreelancerController],
  providers: [FreelancerService, FreelancerResolver],
  exports: [FreelancerService],
})
export class FreelancerModule {}
