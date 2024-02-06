import { SupabaseDataSource } from '../adapters/frameworks/database/supabase';
import { EventMapper } from '../adapters/frameworks/mappers/event.mapper';
import { Event } from './aggregates/event.agg';
export declare class EventsRepository {
    private readonly supabase;
    private readonly eventMapper;
    constructor(supabase: SupabaseDataSource, colorsMapper: EventMapper);
    fetchMyEvents(): Promise<Event[]>;
}
