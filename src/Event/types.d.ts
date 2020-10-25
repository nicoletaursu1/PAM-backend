import { BaseEntity } from "typeorm";

export interface IEvent extends BaseEntity{
  id: string;
  title: string;
  description: string;
  date: string;
}

