import axios from 'axios'
import BookingsT from "../model/booking-tracker.entity.js";

const API_URL = 'https://localhost:3001/api/v1/booking';

export const getBookingsT = async () => {
    const response = await axios.get(API_URL);
    return response.data.map(bookingsT => new BookingsT(bookingsT))
}

export const createBookingsT = async (bookingsTData) => {
    const bookingsT = new BookingsT(bookingsTData)
    const response = await axios.post(API_URL, bookingsT)
    return new BookingsT(response.data)
}

export const updateBookingsT = async (id, bookingsTData) => {
    const response = await axios.put(`${API_URL}/${id}`, bookingsTData)
    return new BookingsT(response.data)
}

export const deleteBookingsT = async (id) => {
    await axios.delete(`${API_URL}/${id}`)
}