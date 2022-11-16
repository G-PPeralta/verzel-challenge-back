import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { ModulesModule } from './modules/modules.module';

@Module({
  imports: [UsersModule, AuthModule, RolesModule, ModulesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
