import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
    /**
     *
     */
    constructor(private prismaService: PrismaService) { }

    async findOne(username: string): Promise<User | undefined> {
        return this.prismaService.user.findFirst({
            where: {
                email: username
            }
        })
    }
}