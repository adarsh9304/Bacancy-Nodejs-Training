import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
    supplyPower(watts:number){
     console.log(`we received the power of ${watts} watts `)
    }
}
