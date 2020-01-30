import { Controller, Get, Res, Query } from '@nestjs/common';
import { Response } from 'express';

@Controller('images')
export class ImagesController {
  @Get('*')
  get(@Res() res: Response, @Query('filePath') filePath: string): void {
    res.sendFile(filePath);
  }
}

