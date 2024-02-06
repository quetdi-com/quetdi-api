import { Mapper } from '../../../shared/interfaces';
import { EventResponseDto } from '../../dtos/response/events.response';
import { Event } from '../../../domain/aggregates/event.agg';

export class EventMapper implements Mapper<Event, EventModel, EventResponseDto> {
  toDomain(record: EventModel): Event {
    return {
      primaryColor: record.primary_color,
      qrCodeId: record.qr_code_id,
      reminderTime: record.reminder_time,
      secondaryColor: record.secondary_color,
      textAddToCalendar: record.text_add_to_calendar,
      textConfirm: record.text_confirm,
      textShareLink: record.text_share_link,
      userId: record.user_id,
      btnAddToCalendar: record.btn_add_to_calendar,
      btnConfirm: record.btn_confirm,
      btnShareLink: record.btn_share_link,
      eventDate: record.event_date,
      eventDescription: record.event_description,
      eventLocationName: record.event_location_name,
      eventLocationUrl: record.event_location_url,
      eventTime: record.event_time,
      eventTitle: record.event_title,
      orgMail: record.org_mail,
      orgName: record.org_name,
      orgPhone: record.org_phone,
      orgWebsite: record.org_website
    }
  }

  toResponse(entity: Event): EventResponseDto {
    return {
      btnAddToCalendar: entity.btnAddToCalendar,
      btnConfirm: entity.btnConfirm,
      btnShareLink: entity.btnShareLink,
      eventDate: entity.eventDate,
      eventDescription: entity.eventDescription,
      eventLocationName: entity.eventLocationName,
      eventLocationUrl: entity.eventLocationUrl,
      eventTime: entity.eventTime,
      eventTitle: entity.eventTitle,
      orgMail: entity.orgMail,
      orgName: entity.orgName,
      orgPhone: entity.orgPhone,
      orgWebsite: entity.orgWebsite,
      primaryColor: entity.primaryColor,
      qrCodeId: entity.qrCodeId,
      reminderTime: entity.reminderTime,
      secondaryColor: entity.secondaryColor,
      textAddToCalendar: entity.textAddToCalendar,
      textConfirm: entity.textConfirm,
      textShareLink: entity.textShareLink,
      userId: entity.userId
    };
  }
}