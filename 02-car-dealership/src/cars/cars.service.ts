import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        {
            id: 1,
            brand: 'toyota',
            model: 'corolla'
        },
        {
            id: 2,
            brand: 'Jeep',
            model: 'Algo'
        },
        {
            id: 3,
            brand: 'BMW',
            model: 'M60'
        }
    ];

}
