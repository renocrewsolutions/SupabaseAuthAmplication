/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ContractService } from "../contract.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ContractCreateInput } from "./ContractCreateInput";
import { Contract } from "./Contract";
import { ContractFindManyArgs } from "./ContractFindManyArgs";
import { ContractWhereUniqueInput } from "./ContractWhereUniqueInput";
import { ContractUpdateInput } from "./ContractUpdateInput";
import { PaymentFindManyArgs } from "../../payment/base/PaymentFindManyArgs";
import { Payment } from "../../payment/base/Payment";
import { PaymentWhereUniqueInput } from "../../payment/base/PaymentWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ContractControllerBase {
  constructor(
    protected readonly service: ContractService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Contract })
  @nestAccessControl.UseRoles({
    resource: "Contract",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createContract(
    @common.Body() data: ContractCreateInput
  ): Promise<Contract> {
    return await this.service.createContract({
      data: {
        ...data,

        client: data.client
          ? {
              connect: data.client,
            }
          : undefined,

        freelancer: data.freelancer
          ? {
              connect: data.freelancer,
            }
          : undefined,
      },
      select: {
        charges: true,

        client: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        endDate: true,

        freelancer: {
          select: {
            id: true,
          },
        },

        id: true,
        startDate: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Contract] })
  @ApiNestedQuery(ContractFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Contract",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async contracts(@common.Req() request: Request): Promise<Contract[]> {
    const args = plainToClass(ContractFindManyArgs, request.query);
    return this.service.contracts({
      ...args,
      select: {
        charges: true,

        client: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        endDate: true,

        freelancer: {
          select: {
            id: true,
          },
        },

        id: true,
        startDate: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Contract })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Contract",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async contract(
    @common.Param() params: ContractWhereUniqueInput
  ): Promise<Contract | null> {
    const result = await this.service.contract({
      where: params,
      select: {
        charges: true,

        client: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        endDate: true,

        freelancer: {
          select: {
            id: true,
          },
        },

        id: true,
        startDate: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Contract })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Contract",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateContract(
    @common.Param() params: ContractWhereUniqueInput,
    @common.Body() data: ContractUpdateInput
  ): Promise<Contract | null> {
    try {
      return await this.service.updateContract({
        where: params,
        data: {
          ...data,

          client: data.client
            ? {
                connect: data.client,
              }
            : undefined,

          freelancer: data.freelancer
            ? {
                connect: data.freelancer,
              }
            : undefined,
        },
        select: {
          charges: true,

          client: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          endDate: true,

          freelancer: {
            select: {
              id: true,
            },
          },

          id: true,
          startDate: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Contract })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Contract",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteContract(
    @common.Param() params: ContractWhereUniqueInput
  ): Promise<Contract | null> {
    try {
      return await this.service.deleteContract({
        where: params,
        select: {
          charges: true,

          client: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          endDate: true,

          freelancer: {
            select: {
              id: true,
            },
          },

          id: true,
          startDate: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/payments")
  @ApiNestedQuery(PaymentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Payment",
    action: "read",
    possession: "any",
  })
  async findPayments(
    @common.Req() request: Request,
    @common.Param() params: ContractWhereUniqueInput
  ): Promise<Payment[]> {
    const query = plainToClass(PaymentFindManyArgs, request.query);
    const results = await this.service.findPayments(params.id, {
      ...query,
      select: {
        amount: true,

        contract: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        date: true,
        id: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/payments")
  @nestAccessControl.UseRoles({
    resource: "Contract",
    action: "update",
    possession: "any",
  })
  async connectPayments(
    @common.Param() params: ContractWhereUniqueInput,
    @common.Body() body: PaymentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      payments: {
        connect: body,
      },
    };
    await this.service.updateContract({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/payments")
  @nestAccessControl.UseRoles({
    resource: "Contract",
    action: "update",
    possession: "any",
  })
  async updatePayments(
    @common.Param() params: ContractWhereUniqueInput,
    @common.Body() body: PaymentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      payments: {
        set: body,
      },
    };
    await this.service.updateContract({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/payments")
  @nestAccessControl.UseRoles({
    resource: "Contract",
    action: "update",
    possession: "any",
  })
  async disconnectPayments(
    @common.Param() params: ContractWhereUniqueInput,
    @common.Body() body: PaymentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      payments: {
        disconnect: body,
      },
    };
    await this.service.updateContract({
      where: params,
      data,
      select: { id: true },
    });
  }
}
