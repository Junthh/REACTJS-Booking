import { createSlice } from "@reduxjs/toolkit";
import data from "../booking/data.json"
import BookingDetail from "../booking/booking-detail";
import { shoppingPhoneReducer } from "./shopingPhoneReducer";

const initialState = {
    listChair: data,
    BookingDetail: [],
};

const bookingMovieSlice = createSlice({
    name: "bookingMovieSlice",
    initialState,
    reducers: {
        addToChair: (state, action) => {
            const chair = action.payload;
            const newChair = [...state.BookingDetail]


            const index = newChair.findIndex((item) => item.soGhe === chair.soGhe);

            if (index === -1) {
                newChair.push({ ...chair, daDat: true })
            }
            state.BookingDetail = newChair;

            state.listChair = state.listChair.map((row) => ({
                ...row,
                danhSachGhe: row.danhSachGhe.map((ghe) =>
                    ghe.soGhe === chair.soGhe ? { ...ghe, daDat: true } : ghe
                ),
            }));
        },

        deletChair: (state, action) => {
            const newChair = state.BookingDetail.filter((item) => item.soGhe !== action.payload.soGhe);
            state.BookingDetail = newChair;

            state.listChair = state.listChair.map((row) => ({
                ...row,
                danhSachGhe: row.danhSachGhe.map((ghe) =>
                    ghe.soGhe === action.payload.soGhe ? { ...ghe, daDat: false } : ghe
                ),
            }));
        },
    },
})

export const { addToChair, deletChair } = bookingMovieSlice.actions;

export const bookingMovieReducer = bookingMovieSlice.reducer;