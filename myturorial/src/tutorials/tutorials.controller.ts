import { TutorialsService } from './tutorials.service';
import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { Tutorial } from '@prisma/client';
@Controller('api/v1/todo')
@Controller('tutorials')
export class TutorialsController {
  constructor(private readonly tutorialsService: TutorialsService) {}

  @Post()
  create(@Body() tutorial: Tutorial) {
    return this.tutorialsService.create(tutorial);
  }

  @Get()
  findAll() {
    return this.tutorialsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tutorialsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() tutorial: Tutorial) {
    return this.tutorialsService.update(+id, tutorial);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tutorialsService.remove(+id);
  }
}
