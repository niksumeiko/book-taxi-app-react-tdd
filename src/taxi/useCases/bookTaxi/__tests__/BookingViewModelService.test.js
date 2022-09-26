// Peter, Porsche, AA328AD
// Jakub, Tesla M (ECO), AA328AD

import { createBookingViewModel } from '../BookingViewModelService';

describe('create booking view model', () => {
    it('returns undefined when booking is unavailable', () => {
        const result = createBookingViewModel();

        expect(result).toBeUndefined()
    });

    it('returns booking details for regular car', () => {
        const booking = {
            driver: { name: 'x' },
            car: { model: 'y', isElectric: false, plate: 'z' },
        };

        const result = createBookingViewModel(booking);

        expect(result.details).toBe('x, y, z');
    });

    it('returns booking details for regular car', () => {
        const booking = {
            driver: { name: 'x' },
            car: { model: 'y', isElectric: true, plate: 'z' },
        };

        const result = createBookingViewModel(booking);

        expect(result.details).toBe('x, y (ECO), z');
    });
});


