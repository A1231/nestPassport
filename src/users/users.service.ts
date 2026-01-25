
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/user.dto';
import { Role } from 'src/enums/role.enum';


export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
      roles: [Role.User],
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
      roles: [Role.Admin],
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = { ...createUserDto, userId: this.users.length + 1, roles: createUserDto.roles ?? [Role.User] };
    this.users.push(user);
    return user;
  }
}
