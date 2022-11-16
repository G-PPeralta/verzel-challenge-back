import * as bcrypt from 'bcrypt';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username);
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(pass, salt);

    const isMatch = await bcrypt.compare(pass, hashedPassword);

    if (isMatch) {
      return user;
    }

    return null;
  }

  async login(user: any) {
    const { id, username, email, password } = user;

    if (!username || !password)
      throw new InternalServerErrorException(
        'username and/or password not informed',
      );

    const userInfo = await this.usersService.findOneByUsername(username);

    let role = 'USER';

    if (userInfo && userInfo.rolesId === 1) {
      role = 'ADMIN';
    }

    const payload = { username: email, sub: id, roles: role };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
