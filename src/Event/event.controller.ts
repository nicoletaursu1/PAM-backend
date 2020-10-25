import { Body, Controller, Post, Delete, HttpCode, Put } from "@nestjs/common";
import { EventDTO } from "./dto/event.dto";
import { IEvent } from './types';
import { EventService } from './event.service';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) { }

  @Post('create')
  async create(@Body() body: EventDTO): Promise<Partial<IEvent>> {
    return this.eventService.create(body);
  }

  @Delete('delete')
  async delete(@Body() body: IEvent): Promise<Partial<any>> {
    return this.eventService.deleteEvent(body);
  }

  @Put('update')
  async update(@Body() body: IEvent): Promise<Partial<IEvent>> {
    return this.eventService.updateEvent(body);
  }
}