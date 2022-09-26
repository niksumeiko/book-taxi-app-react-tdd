import { useMutation } from '@tanstack/react-query';

export const useBookTaxi = (transformationFn) => {
    const { mutate, data } = useMutation(async (formValues) => {
        const response = await fetch('http://localhost:9000/book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formValues),
        });

        return response.json();
    });

    return {
        book: mutate,
        booking: transformationFn(data),
    };
};
