export default class BookingsT {
    constructor({
                    hotelId,
                    userId,
                    number,
                    checkInDate,
                    checkOutDate,
                    paymentStatus,
                }) {
        this.hotelId = hotelId;
        this.userId = userId;
        this.number = number;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.paymentStatus = paymentStatus;
    }
}