import { SupabaseDataSource } from '../adapters/frameworks/database/supabase';

import { EventMapper } from '../adapters/frameworks/mappers/event.mapper';
import { Event } from './aggregates/event.agg';
import { EventResponseDto } from '../adapters/dtos/response/events.response';
import multer from 'multer';

export class EventsRepository {
  private readonly supabase: SupabaseDataSource;
  private readonly eventMapper: EventMapper;

  constructor(supabase: SupabaseDataSource, colorsMapper: EventMapper) {
    this.supabase = supabase;
    this.eventMapper = colorsMapper;
  }

  async fetchMyEvents(): Promise<Event[]> {

    let auth = await this.supabase.instance().auth.setSession({
      refresh_token: "ae_CgzauMXrJJxeO9SdcDQ",
      access_token: "eyJhbGciOiJIUzI1NiIsImtpZCI6Ik9yNU1TanNXL1BrTWt4UW4iLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzA3MTA2OTQ1LCJpYXQiOjE3MDY1MDIxNDUsImlzcyI6Imh0dHBzOi8vZW9nbXNuaHR6YnRkbWtjb213bmkuc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6IjJiZGI0ODUwLTk1YjEtNGMwNS04MTg4LTA0MWE3MzA0ZWYwOCIsImVtYWlsIjoiZHVjZHV5LmRldkBnbWFpbC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6Imdvb2dsZSIsInByb3ZpZGVycyI6WyJnb29nbGUiXX0sInVzZXJfbWV0YWRhdGEiOnsiYXZhdGFyX3VybCI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0pFQ1J6VUhzc3FQb3RNczI3UlJ1UHAtM2hnYm5hRVBuMndWSDZ3dzFfVC1nQ2c9czk2LWMiLCJlbWFpbCI6ImR1Y2R1eS5kZXZAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZ1bGxfbmFtZSI6IkR1eSBNYWkgxJDhu6ljIiwiaXNzIjoiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tIiwibmFtZSI6IkR1eSBNYWkgxJDhu6ljIiwicGhvbmVfdmVyaWZpZWQiOmZhbHNlLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jSkVDUnpVSHNzcVBvdE1zMjdSUnVQcC0zaGdibmFFUG4yd1ZINnd3MV9ULWdDZz1zOTYtYyIsInByb3ZpZGVyX2lkIjoiMTA4NzAxNTI4NjU2NDU0MjE4OTU5Iiwic3ViIjoiMTA4NzAxNTI4NjU2NDU0MjE4OTU5In0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoib2F1dGgiLCJ0aW1lc3RhbXAiOjE3MDY1MDIxNDV9XSwic2Vzc2lvbl9pZCI6IjhhODQwZDFjLWI4ZjQtNGUzMC1iYTMzLTgwMGJhMDRhMGZlMiJ9.FcNQgs88m_KnRJoXxJS3UIaKwWTyd52huHmws3WIGiw"
    })
    let { data, error } = (await this.supabase.instance().from('events').select('*').eq('user_id', auth.data.user.id))
    if (error) {
      throw error.message;
    }

    return data.map((item) => this.eventMapper.toDomain(item));
  }

  async addEvents(event: Event): Promise<Event[]> {
    let auth = await this.supabase.instance().auth.setSession({
      refresh_token: "ae_CgzauMXrJJxeO9SdcDQ",
      access_token: "eyJhbGciOiJIUzI1NiIsImtpZCI6Ik9yNU1TanNXL1BrTWt4UW4iLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzA3MTA2OTQ1LCJpYXQiOjE3MDY1MDIxNDUsImlzcyI6Imh0dHBzOi8vZW9nbXNuaHR6YnRkbWtjb213bmkuc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6IjJiZGI0ODUwLTk1YjEtNGMwNS04MTg4LTA0MWE3MzA0ZWYwOCIsImVtYWlsIjoiZHVjZHV5LmRldkBnbWFpbC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6Imdvb2dsZSIsInByb3ZpZGVycyI6WyJnb29nbGUiXX0sInVzZXJfbWV0YWRhdGEiOnsiYXZhdGFyX3VybCI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0pFQ1J6VUhzc3FQb3RNczI3UlJ1UHAtM2hnYm5hRVBuMndWSDZ3dzFfVC1nQ2c9czk2LWMiLCJlbWFpbCI6ImR1Y2R1eS5kZXZAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZ1bGxfbmFtZSI6IkR1eSBNYWkgxJDhu6ljIiwiaXNzIjoiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tIiwibmFtZSI6IkR1eSBNYWkgxJDhu6ljIiwicGhvbmVfdmVyaWZpZWQiOmZhbHNlLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jSkVDUnpVSHNzcVBvdE1zMjdSUnVQcC0zaGdibmFFUG4yd1ZINnd3MV9ULWdDZz1zOTYtYyIsInByb3ZpZGVyX2lkIjoiMTA4NzAxNTI4NjU2NDU0MjE4OTU5Iiwic3ViIjoiMTA4NzAxNTI4NjU2NDU0MjE4OTU5In0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoib2F1dGgiLCJ0aW1lc3RhbXAiOjE3MDY1MDIxNDV9XSwic2Vzc2lvbl9pZCI6IjhhODQwZDFjLWI4ZjQtNGUzMC1iYTMzLTgwMGJhMDRhMGZlMiJ9.FcNQgs88m_KnRJoXxJS3UIaKwWTyd52huHmws3WIGiw"
    })
    event.userId = auth.data.user.id;
    let { data, error } = (await this.supabase.instance().from('events').upsert(this.eventMapper.toRequest(event)).select('*'));
    if (error) {
      throw error.message;
    }
    return data.map((item) => this.eventMapper.toDomain(item));
  }
  async uploadCoverImage(file: multer.File): Promise<string>{
    let auth = await this.supabase.instance().auth.setSession({
      refresh_token: "ae_CgzauMXrJJxeO9SdcDQ",
      access_token: "eyJhbGciOiJIUzI1NiIsImtpZCI6Ik9yNU1TanNXL1BrTWt4UW4iLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzA3MTA2OTQ1LCJpYXQiOjE3MDY1MDIxNDUsImlzcyI6Imh0dHBzOi8vZW9nbXNuaHR6YnRkbWtjb213bmkuc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6IjJiZGI0ODUwLTk1YjEtNGMwNS04MTg4LTA0MWE3MzA0ZWYwOCIsImVtYWlsIjoiZHVjZHV5LmRldkBnbWFpbC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6Imdvb2dsZSIsInByb3ZpZGVycyI6WyJnb29nbGUiXX0sInVzZXJfbWV0YWRhdGEiOnsiYXZhdGFyX3VybCI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0pFQ1J6VUhzc3FQb3RNczI3UlJ1UHAtM2hnYm5hRVBuMndWSDZ3dzFfVC1nQ2c9czk2LWMiLCJlbWFpbCI6ImR1Y2R1eS5kZXZAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZ1bGxfbmFtZSI6IkR1eSBNYWkgxJDhu6ljIiwiaXNzIjoiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tIiwibmFtZSI6IkR1eSBNYWkgxJDhu6ljIiwicGhvbmVfdmVyaWZpZWQiOmZhbHNlLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jSkVDUnpVSHNzcVBvdE1zMjdSUnVQcC0zaGdibmFFUG4yd1ZINnd3MV9ULWdDZz1zOTYtYyIsInByb3ZpZGVyX2lkIjoiMTA4NzAxNTI4NjU2NDU0MjE4OTU5Iiwic3ViIjoiMTA4NzAxNTI4NjU2NDU0MjE4OTU5In0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoib2F1dGgiLCJ0aW1lc3RhbXAiOjE3MDY1MDIxNDV9XSwic2Vzc2lvbl9pZCI6IjhhODQwZDFjLWI4ZjQtNGUzMC1iYTMzLTgwMGJhMDRhMGZlMiJ9.FcNQgs88m_KnRJoXxJS3UIaKwWTyd52huHmws3WIGiw"
    })
    const { data, error } = await this.supabase.instance().storage.from('covers').upload(`${auth.data.user.id}/${file.originalname}-${Date.now()}`, file);
    if (error) {
      throw error.message;
    }
    return data.path;
  }
}
