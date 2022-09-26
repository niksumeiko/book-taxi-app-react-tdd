export function createBookingViewModel(booking) {
    if (!booking) {
        return undefined;
    }

    const { driver, car } = booking;
    const model = getCarDetails(car);

    return {
        details: `${driver.name}, ${model}, ${car.plate}`,
    }
}

function getCarDetails(car) {
    if (car.isElectric) {
        return `${car.model} (ECO)`;
    }

    return car.model;
}
