import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { deletChair } from "../store/bookingMovieReducer";

export default function BookingDetail() {
    const bookingDetail = useSelector((state) => state.bookingMovie.BookingDetail)
    const dispatch = useDispatch();
    

    console.log(bookingDetail)

    return (
        <div>
            <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Thông Tin Chi Tiết</h2>
                <div className="bg-gray-50 p-6 rounded-lg border h-full shadow-sm space-y-4">
                    {/* Danh sách ghế đã chọn (demo tĩnh) */}
                    {bookingDetail.map((item) => {
                        return (
                            <div className="space-y-2" key={item.soGhe}>
                                <div className="flex justify-between items-center border-b pb-1">
                                    <span className="text-gray-700" >🎫 Ghế {item.soGhe}</span>
                                    <div className="flex items-center gap-4">
                                        <span className="text-blue-600 font-semibold">{item.gia}đ</span>
                                        <button className="text-red-500 hover:text-red-700 text-sm" onClick={() => { dispatch(deletChair({soGhe: item.soGhe}))}}>❌</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}


                    {/* Tổng tiền */}
                    <div className="flex justify-between pt-4 border-t font-medium text-lg">
                        <span>Tổng cộng:</span>
                        {bookingDetail.reduce((total, item) => total + item.gia, 0).toLocaleString("vi-VN")}đ
                    </div>
                </div>
            </div>
        </div>
    )
}
