import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {


 async supplyPower(watts:number){

    return `we have power of ${watts} watt`

 }


}
