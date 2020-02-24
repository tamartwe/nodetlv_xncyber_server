import { Controller, Get, Res, Query } from '@nestjs/common';
import { Response } from 'express';
import * as pathLib from 'path';

@Controller('images')
export class ImagesController {
  @Get('*')
  get(@Res() res: Response, @Query('filePath') filePath: string): void {
    const path  = pathLib.join(__dirname, '..', '..', 'resources', filePath);
    res.sendFile(path);
  }
}

