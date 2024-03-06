import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService],
  exports:[PowerService]
})
export class PowerModule {}

//                Computer
//       
//        CPU                 Disk
//
//              PowerSupply
//
// 
// we will start with powersupply which have no dependency further 
// Bottom-Up approach
