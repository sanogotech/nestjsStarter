import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { Tutorial, Prisma } from '@prisma/client';


@Injectable()
export class TutorialsService {

  constructor(private prisma: PrismaService) {}

  create(Tutorial: Tutorial) {
    // return 'This action adds a new tutorial';
  }

  findAll() {
    //return `This action returns all tutorials`;
    return  this.prisma.tutorial.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} tutorial`;
  }

  update(id: number, tutorial: Tutorial) {
    return `This action updates a #${id} tutorial`;
  }

  remove(id: number) {
   // return `This action removes a #${id} tutorial`;
   return this.prisma.tutorial.delete({
    where{
      this.prisma.tutorial.id =id
    }

   })
  };
}
