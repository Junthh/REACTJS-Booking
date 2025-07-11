import { createSlice } from '@reduxjs/toolkit';
import data from "../shopping-phone-redux/data.json";

const initialState = {
    listProduct: data,
    productDetail: data[0],
    carts: [],
};

const shoppingPhoneSlice = createSlice({
    name: "shoppingPhoneSlice",
    initialState,
    reducers: {
        setDetailProduct: (state, action) => {
            state.productDetail = action.payload
        },

        addToCart: (state, action) => {
            const phone = action.payload;
            const newCarts = [...state.carts];

            const index = newCarts.findIndex((item) => item.maSP === phone.maSP);

            if (index === -1) {
                newCarts.push({ ...phone, soLuong: 1 });
            } else {
                newCarts[index].soLuong += 1;
            }

            state.carts = newCarts;
        },

        updateQuantity: (state, action) => {
            const newCarts = state.carts.map((item) => {
                if (item.maSP !== action.payload.maSP) return item;
                return {
                    ...item,
                    soLuong: item.soLuong + action.payload.quantity,
                };
            });
            // update lại state
            state.carts = newCarts;

        },

        deleteProduct: (state, action) => {
            const { maSP } = action.payload;
            const newCarts = state.carts.filter((item) => item.maSP !== maSP);
            state.carts = newCarts;
        },
    }
});

export const { setDetailProduct, addToCart, updateQuantity, deleteProduct } = shoppingPhoneSlice.actions;

export const shoppingPhoneReducer = shoppingPhoneSlice.reducer;