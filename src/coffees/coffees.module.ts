import { ConfigModule } from '@nestjs/config';
import { COFFEE_BRANDS } from './coffees.constants';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor]), ConfigModule],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    {
      provide: COFFEE_BRANDS,
      useFactory: async (): Promise<string[]> => {
        const brands = Promise.resolve(['bad guys', 'nescafe']);
        return brands;
      },
    },
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
