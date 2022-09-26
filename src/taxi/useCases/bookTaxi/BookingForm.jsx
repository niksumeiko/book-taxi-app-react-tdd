import React, { useState } from 'react';

import { createBookingViewModel } from './BookingViewModelService';
import { useBookTaxi } from './useBookTaxi';

export const BookingForm = () => {
    const { book, booking } = useBookTaxi(createBookingViewModel);
    const [formValues, setFormValues] = useState({ destination: '' });

    const handleChange = (e) => {
        setFormValues({ destination: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        book(formValues);
    };

    if (booking) {
        return (
            <div>
                <p>It is confirmed!</p>
                <p>{booking.details}</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <div>
                <label htmlFor="destination">Destination</label>
                <input type="text" id="destination" onChange={handleChange} />
            </div>
            <button type="submit">Book a ride</button>
        </form>
    );
};
