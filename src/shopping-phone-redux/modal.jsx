import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, deleteProduct } from "./../store/shopingPhoneReducer"

export default function Modal(props) {
  const dispatch = useDispatch();

  const carts = useSelector((state) => state.shoppingPhone.carts)

  return (
    <div>
      <div>
        {/* Modal toggle */}
        <button
          data-modal-target="default-modal"
          data-modal-toggle="default-modal"
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Open Cart
        </button>
        {/* Main modal */}
        <div
          id="default-modal"
          tabIndex={-1}
          aria-hidden="true"
          className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative p-4 w-full max-w-5xl max-h-full">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Carts
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="default-modal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              {/* Modal body */}
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Product name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Image
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Quanlity
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {carts.map((item) => {
                      return (
                        <tr
                          key={item.maSP}
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                        >
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {item.tenSP}
                          </th>
                          <td className="px-6 py-4">
                            <img src={item.hinhAnh} className="size-20" />
                          </td>
                          <td className="px-6 py-4">{item.giaBan}</td>
                          <td className="px-6 py-4 space-x-2">
                            <button
                              disabled={item.soLuong === 1}
                              className="px-3 py-2 rounded-md border border-black cursor-pointer"
                              onClick={() => {
                                dispatch(updateQuantity({maSP: item.maSP, quantity: -1}))
                              }}
                            >
                              -
                            </button>
                            <span>{item.soLuong}</span>
                            <button
                              className="px-3 py-2 rounded-md border border-black cursor-pointer"
                              onClick={() => {
                                dispatch(updateQuantity({maSP: item.maSP, quantity: +1}))
                              }}
                            >
                              +
                            </button>
                          </td>
                          <td className="px-6 py-4">
                            {item.giaBan * item.soLuong}
                          </td>
                          <td className="px-6 py-4 font-bold text-red-500 ">
                            <button
                              className="cursor-pointer"
                              onClick={() => {
                                dispatch(deleteProduct({maSP: item.maSP}))
                              }}
                            >
                              X
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
