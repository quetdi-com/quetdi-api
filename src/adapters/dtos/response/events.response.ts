import { PaginationResponseDto } from '../pagination.dto';

export interface EventResponseDto {
  userId: string;
  eventTitle: string;
  eventDescription: string;
  eventDate: string;
  eventTime: string;
  eventLocationName: string;
  eventLocationUrl: string;
  orgName: string;
  orgPhone: string;
  orgMail: string;
  orgWebsite: string;
  reminderTime: number;
  btnAddToCalendar: boolean;
  btnConfirm: boolean;
  btnShareLink: boolean;
  primaryColor: string;
  secondaryColor: string;
  qrCodeId: string;
  textAddToCalendar: string;
  textConfirm: string;
  textShareLink: string;
  coverUrl: string;
}

export interface EventsResponseDto {
  data: EventResponseDto[];
  paging: PaginationResponseDto;
}
