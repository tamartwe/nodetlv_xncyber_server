import { Controller, Get, Res, Query } from '@nestjs/common';
import { Response } from 'express';
import * as pathLib from 'path';
import { sanitize } from "sanitize-filename-ts";

@Controller('images')
export class ImagesController {
  @Get('*')
  get(@Res() res: Response, @Query('filePath') filePath: string): void {
    const path  = pathLib.join(__dirname, '..', '..', 'resources', sanitize(filePath));
    res.sendFile(path);
  }
}

