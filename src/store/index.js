import { configureStore } from "@reduxjs/toolkit";
import { shoppingPhoneReducer } from "./shopingPhoneReducer";
import { bookingMovieReducer } from "./bookingMovieReducer";

export const store = configureStore ({
    reducer: {
        // combine child reducer
        bookingMovie: bookingMovieReducer,
    }
});