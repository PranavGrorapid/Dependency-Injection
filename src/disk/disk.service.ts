import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';


@Injectable()
export class DiskService {

  constructor(private powerService:PowerService ) {}

  getData():string{

    console.log('Drawing 20w of power from power module');
    this.powerService.supplyPower(20)


    return `data!!!`
    
  }

}
