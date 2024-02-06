"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventMapper = void 0;
class EventMapper {
    toDomain(record) {
        return {
            coverUrl: record.event_cover_url,
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
        };
    }
    toResponse(entity) {
        return {
            coverUrl: entity.coverUrl,
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
    toRequest(entity) {
        return {
            event_cover_url: entity.coverUrl,
            btn_add_to_calendar: entity.btnAddToCalendar,
            btn_confirm: entity.btnConfirm,
            btn_share_link: entity.btnShareLink,
            event_date: entity.eventDate,
            event_description: entity.eventDescription,
            event_location_name: entity.eventLocationName,
            event_location_url: entity.eventLocationUrl,
            event_time: entity.eventTime,
            event_title: entity.eventTitle,
            org_mail: entity.orgMail,
            org_name: entity.orgName,
            org_phone: entity.orgPhone,
            org_website: entity.orgWebsite,
            primary_color: entity.primaryColor,
            qr_code_id: entity.qrCodeId,
            reminder_time: entity.reminderTime,
            secondary_color: entity.secondaryColor,
            text_add_to_calendar: entity.textAddToCalendar,
            text_confirm: entity.textConfirm,
            text_share_link: entity.textShareLink,
            user_id: entity.userId
        };
    }
}
exports.EventMapper = EventMapper;
//# sourceMappingURL=event.mapper.js.map