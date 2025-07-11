import React from "react";
import BookingDetail from "./booking-detail";
import Chair from "./chair";
import { useSelector } from "react-redux";

export default function Booking() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center px-4 py-8">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bên trái: Ghế */}
        <Chair />

        {/* Bên phải: Chi tiết */}
        <div className="flex flex-col justify-between">
          <BookingDetail />
        </div>
      </div>
    </div>
  );
}
