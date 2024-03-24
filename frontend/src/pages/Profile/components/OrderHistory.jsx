import React from "react";
import { Link } from "react-router-dom";
import useMyOrdersFetch from "../../../hooks/useMyOrdersFetch";
import formatter from "../../../utils/formatter";
import { useHeaderData } from "../../../context/headerCtx";
import { formatDate } from "../../../utils/formatDate";
import { BeatLoader } from "react-spinners";
import ErrorMessage from "../../../components/UI/ErrorMessage";

const OrderHistory = () => {
  const { areOrdersLoading, ordersError, orders } = useMyOrdersFetch();
  const { currency } = useHeaderData();

  console.log(orders);

  return (
    <div className="flex w-full flex-col gap-3">
      <table>
        <thead className="bg-darkestPurple">
          <tr className="h-[48px] text-center">
            <th>Order ID</th>
            <th>Quantity</th>
            <th>Created on</th>
            <th>Status</th>
            <th>Payment</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {ordersError && <ErrorMessage msg={ordersError} />}
          {areOrdersLoading && <BeatLoader color="#fff" />}
          {orders &&
            !areOrdersLoading &&
            orders.map((order, index) => (
              <tr
                key={index}
                className={`h-[48px] text-center font-semibold ${index === 0 || index % 2 === 0 ? "bg-mediumPurple" : "bg-lightPurple"}`}
              >
                <td>
                  <span>{order._id}</span>
                </td>
                <td className="items-center justify-center">
                  <span>{order.orderItems.length}</span>
                </td>
                <td>
                  <span>{formatDate(order.createdAt)}</span>
                </td>
                <td>
                  {order.isDevelivered ? (
                    <span className="rounded-md border-none bg-lightGreen px-[10px] py-[6px] text-darkGreen">
                      Delivered
                    </span>
                  ) : (
                    <span className="rounded-md border-none bg-lightOrange px-[10px] py-[6px] text-mediumOrange">
                      Unfulfilled
                    </span>
                  )}
                </td>
                <td>
                  {order.isPaid ? (
                    <span className="rounded-md border-none bg-lightGreen px-[10px] py-[6px] text-darkGreen">
                      Paid
                    </span>
                  ) : (
                    <span className="rounded-md border-none bg-skyBlue px-[10px] py-[6px] text-blueGreen">
                      Unpaid
                    </span>
                  )}
                </td>
                <td>
                  {order.totalAmount > 0 ? (
                    <span>
                      {formatter(order.totalAmount, currency.curSymbol)}
                    </span>
                  ) : (
                    <span>
                      {formatter(order.totalPrice, currency.curSymbol)}
                    </span>
                  )}
                </td>
                <td>
                  <Link
                    to={`/profile/orders/${order._id}`}
                    className="rounded-md border-none bg-darkGrey/70 px-[10px] py-[6px] hover:bg-lightGrey hover:text-black"
                  >
                    Details
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {orders.length === 0 && (
        <span className="w-full text-center">No order were made yet.</span>
      )}
    </div>
  );
};

export default OrderHistory;
