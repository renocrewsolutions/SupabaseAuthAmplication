/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Client } from "./Client";
import { ClientCountArgs } from "./ClientCountArgs";
import { ClientFindManyArgs } from "./ClientFindManyArgs";
import { ClientFindUniqueArgs } from "./ClientFindUniqueArgs";
import { CreateClientArgs } from "./CreateClientArgs";
import { UpdateClientArgs } from "./UpdateClientArgs";
import { DeleteClientArgs } from "./DeleteClientArgs";
import { ContractFindManyArgs } from "../../contract/base/ContractFindManyArgs";
import { Contract } from "../../contract/base/Contract";
import { FreelancerFindManyArgs } from "../../freelancer/base/FreelancerFindManyArgs";
import { Freelancer } from "../../freelancer/base/Freelancer";
import { JobFindManyArgs } from "../../job/base/JobFindManyArgs";
import { Job } from "../../job/base/Job";
import { ClientService } from "../client.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Client)
export class ClientResolverBase {
  constructor(
    protected readonly service: ClientService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Client",
    action: "read",
    possession: "any",
  })
  async _clientsMeta(
    @graphql.Args() args: ClientCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Client])
  @nestAccessControl.UseRoles({
    resource: "Client",
    action: "read",
    possession: "any",
  })
  async clients(@graphql.Args() args: ClientFindManyArgs): Promise<Client[]> {
    return this.service.clients(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Client, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Client",
    action: "read",
    possession: "own",
  })
  async client(
    @graphql.Args() args: ClientFindUniqueArgs
  ): Promise<Client | null> {
    const result = await this.service.client(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Client)
  @nestAccessControl.UseRoles({
    resource: "Client",
    action: "create",
    possession: "any",
  })
  async createClient(@graphql.Args() args: CreateClientArgs): Promise<Client> {
    return await this.service.createClient({
      ...args,
      data: {
        ...args.data,

        freelancer: args.data.freelancer
          ? {
              connect: args.data.freelancer,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Client)
  @nestAccessControl.UseRoles({
    resource: "Client",
    action: "update",
    possession: "any",
  })
  async updateClient(
    @graphql.Args() args: UpdateClientArgs
  ): Promise<Client | null> {
    try {
      return await this.service.updateClient({
        ...args,
        data: {
          ...args.data,

          freelancer: args.data.freelancer
            ? {
                connect: args.data.freelancer,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Client)
  @nestAccessControl.UseRoles({
    resource: "Client",
    action: "delete",
    possession: "any",
  })
  async deleteClient(
    @graphql.Args() args: DeleteClientArgs
  ): Promise<Client | null> {
    try {
      return await this.service.deleteClient(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Contract], { name: "contracts" })
  @nestAccessControl.UseRoles({
    resource: "Contract",
    action: "read",
    possession: "any",
  })
  async findContracts(
    @graphql.Parent() parent: Client,
    @graphql.Args() args: ContractFindManyArgs
  ): Promise<Contract[]> {
    const results = await this.service.findContracts(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Freelancer], { name: "freelancers" })
  @nestAccessControl.UseRoles({
    resource: "Freelancer",
    action: "read",
    possession: "any",
  })
  async findFreelancers(
    @graphql.Parent() parent: Client,
    @graphql.Args() args: FreelancerFindManyArgs
  ): Promise<Freelancer[]> {
    const results = await this.service.findFreelancers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Job], { name: "jobs" })
  @nestAccessControl.UseRoles({
    resource: "Job",
    action: "read",
    possession: "any",
  })
  async findJobs(
    @graphql.Parent() parent: Client,
    @graphql.Args() args: JobFindManyArgs
  ): Promise<Job[]> {
    const results = await this.service.findJobs(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Freelancer, {
    nullable: true,
    name: "freelancer",
  })
  @nestAccessControl.UseRoles({
    resource: "Freelancer",
    action: "read",
    possession: "any",
  })
  async getFreelancer(
    @graphql.Parent() parent: Client
  ): Promise<Freelancer | null> {
    const result = await this.service.getFreelancer(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
