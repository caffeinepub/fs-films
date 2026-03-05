import Array "mo:core/Array";
import Int "mo:core/Int";
import Time "mo:core/Time";
import Order "mo:core/Order";

actor {
  type BookingInquiry = {
    name : Text;
    phone : Text;
    email : Text;
    eventType : EventType;
    message : Text;
    timestamp : Time.Time;
  };

  module BookingInquiry {
    public func compare(by1 : BookingInquiry, by2 : BookingInquiry) : Order.Order {
      Int.compare(by2.timestamp, by1.timestamp);
    };
  };

  type EventType = {
    #weddings;
    #preWedding;
    #corporateEvents;
    #fashionEvents;
    #parties;
    #conferences;
    #portrait;
    #outdoorPhotoShoot;
    #birthday;
    #babyShoot;
    #cinematicShoots;
    #candidShoots;
  };

  var bookingInquiries : [BookingInquiry] = [];

  public shared ({ caller }) func submitInquiry(
    name : Text,
    phone : Text,
    email : Text,
    eventType : EventType,
    message : Text,
  ) : async Bool {
    let newInquiry : BookingInquiry = {
      name;
      phone;
      email;
      eventType;
      message;
      timestamp = Time.now();
    };
    bookingInquiries := bookingInquiries.concat([newInquiry]);
    true;
  };

  public query ({ caller }) func getAllInquiries() : async [BookingInquiry] {
    bookingInquiries.sort();
  };
};
