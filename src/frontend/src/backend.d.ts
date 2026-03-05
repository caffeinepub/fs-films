import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface BookingInquiry {
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    phone: string;
    eventType: EventType;
}
export type Time = bigint;
export enum EventType {
    conferences = "conferences",
    candidShoots = "candidShoots",
    outdoorPhotoShoot = "outdoorPhotoShoot",
    corporateEvents = "corporateEvents",
    cinematicShoots = "cinematicShoots",
    birthday = "birthday",
    fashionEvents = "fashionEvents",
    portrait = "portrait",
    babyShoot = "babyShoot",
    weddings = "weddings",
    parties = "parties",
    preWedding = "preWedding"
}
export interface backendInterface {
    getAllInquiries(): Promise<Array<BookingInquiry>>;
    submitInquiry(name: string, phone: string, email: string, eventType: EventType, message: string): Promise<boolean>;
}
