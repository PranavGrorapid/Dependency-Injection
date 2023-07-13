import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {

    constructor( private powerService:PowerService){}


    compute(a:number,b:number){

        console.log(`Drawing 20 w of power from power module`);

        this.powerService.supplyPower(20)
        

        return a+b
    }

}
