import { Controller, Get, Res, Query } from '@nestjs/common';
import { Response } from 'express';

@Controller('icon')
export class IconController {
  @Get('*')
  get(@Res() res: Response, @Query() filePath: string): void {
    res.sendFile(filePath);
  }
}

