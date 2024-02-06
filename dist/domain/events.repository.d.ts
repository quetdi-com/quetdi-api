import { SupabaseDataSource } from '../adapters/frameworks/database/supabase';
import { EventMapper } from '../adapters/frameworks/mappers/event.mapper';
import { Event } from './aggregates/event.agg';
import multer from 'multer';
export declare class EventsRepository {
    private readonly supabase;
    private readonly eventMapper;
    constructor(supabase: SupabaseDataSource, colorsMapper: EventMapper);
    fetchMyEvents(): Promise<Event[]>;
    addEvents(event: Event): Promise<Event[]>;
    uploadCoverImage(file: multer.File): Promise<string>;
}
