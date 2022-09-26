import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BookingForm } from './taxi/useCases/bookTaxi/BookingForm';
import './App.module.scss';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <main>
                <div>
                    <div>
                        <img src="/map.png" />
                        <BookingForm />
                    </div>
                </div>
            </main>
        </QueryClientProvider>
    );
}

export default App;
