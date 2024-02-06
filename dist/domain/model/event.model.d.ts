interface EventModel {
    user_id: string;
    event_title: string;
    event_description: string;
    event_date: string;
    event_time: string;
    event_location_name: string;
    event_location_url: string;
    org_name: string;
    org_phone: string;
    org_mail: string;
    org_website: string;
    reminder_time: number;
    btn_add_to_calendar: boolean;
    btn_confirm: boolean;
    btn_share_link: boolean;
    primary_color: string;
    secondary_color: string;
    qr_code_id: string;
    text_add_to_calendar: string;
    text_confirm: string;
    text_share_link: string;
}
