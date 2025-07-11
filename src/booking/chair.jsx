import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToChair } from "../store/bookingMovieReducer";

export default function Chair() {
  const listChair = useSelector((state) => state.bookingMovie.listChair);

  const dispatch = useDispatch();

  // Hàng ngang: 1 → 12
  const rows = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Chọn Ghế</h2>
      <div className="bg-gray-500 w-full h-6 rounded-t-lg text-center text-white font-medium mb-6 shadow-inner">
        MÀN HÌNH
      </div>

      {/* Header: số ghế 1 -> 12 */}
      <div className="grid grid-cols-[40px_repeat(12,1fr)] gap-2 mb-2 px-1">
        <div></div>
        {rows.map((so) => (
          <div
            key={so}
            className="text-center text-sm font-medium text-gray-600"
          >
            {so}
          </div>
        ))}
      </div>

      {/* Ghế theo hàng A → J */}
      <div className="space-y-2">
        {listChair
          .filter((row) => row.hang !== "") // bỏ hàng đầu tiên trống nếu có
          .map((row) => (
            <div
              key={row.hang}
              className="grid grid-cols-[40px_repeat(12,1fr)] gap-2 items-center px-1"
            >
              <div className="text-sm font-medium text-gray-600 text-center">
                {row.hang}
              </div>
              {row.danhSachGhe.map((ghe) => (
                <button
                  key={ghe.soGhe}
                  title={ghe.soGhe}
                  className={`w-8 h-8 rounded border flex items-center justify-center text-xs font-medium
                    ${
                      ghe.daDat
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-green-500 hover:bg-blue-500 cursor-pointer"
                    }
                    text-white`}
                  onClick={() => {
                    dispatch(addToChair({ soGhe: ghe.soGhe, gia: ghe.gia }));
                  }}
                >
                  {ghe.soGhe.replace(row.hang, "")} {/* Hiện số ghế (1-12) */}
                </button>
              ))}
            </div>
          ))}
      </div>

      {/* Chú thích */}
      <div className="flex flex-wrap gap-6 text-sm mt-6">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 border rounded"></div> Ghế trống
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-500 border rounded"></div> Đang chọn
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-400 border rounded"></div> Đã đặt
        </div>
      </div>
    </div>
  );
}
