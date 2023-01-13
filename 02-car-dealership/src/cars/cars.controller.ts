import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {

    private cars: string[] = ['toyota','Jeep','BMW','Masserati'];

    @Get()
    getAllCars() {
        return this.cars;
    }

    @Get(':id')
    getCarById(@Param('id') id: string) {
        return this.cars[id];
    }
}
