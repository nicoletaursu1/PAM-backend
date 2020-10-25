import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { EventDTO } from "./dto/event.dto";
import { Event } from './entities/event.entity';
import { IEvent } from "./types";

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>
  ){}

  async create(eventProps: EventDTO): Promise<Partial<Event>> {
    const eventSave = new Event(eventProps);
    const event = await this.eventRepository.save(eventSave);

    return await event;
  }

  async getEventByTitle(title: EventDTO): Promise<Event[]> {
    return await this.eventRepository.find(title);
  }

  async getEventByDate(date: EventDTO): Promise<Event[]> {
    return await this.eventRepository.find(date);
  }

  async updateEvent(eventProps: IEvent): Promise<any> {
    const eventUpdate = await this.eventRepository.findOneOrFail(eventProps.id);
    return await this.eventRepository.save({ ...eventUpdate, ...eventProps });
  }

  async deleteEvent(eventProps: IEvent): Promise<any> {
    const targetEvent = await this.eventRepository.findOneOrFail(eventProps.id);
    return await this.eventRepository.delete(targetEvent);
  }
}