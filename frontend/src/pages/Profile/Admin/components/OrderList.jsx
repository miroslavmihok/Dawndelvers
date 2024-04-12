import React from "react";
import { Link } from "react-router-dom";
import { useHeaderData } from "../../../../context/headerCtx";
import useGetAllOrders from "../../../../hooks/admin/useGetAllOrders";
import formatter from "../../../../utils/formatter";
import { formatDate } from "../../../../utils/formatDate";
import { BeatLoader } from "react-spinners";
import ErrorMessage from "../../../../components/UI/ErrorMessage";
import { FaRegPenToSquare } from "react-icons/fa6";

const OrderList = () => {
  const { areOrdersLoading, ordersError, orders } = useGetAllOrders();
  const { currency } = useHeaderData();

  console.log(orders);

  return (
    <div className="flex w-full flex-col gap-3">
      <table>
        <thead className="bg-darkestPurple">
          <tr className="h-[48px] text-center">
            <th className="hidden 2xl:table-cell">Order ID</th>
            <th>Ordered by</th>
            <th className="hidden xs:table-cell">Quantity</th>
            <th>Created on</th>
            <th className="hidden md:table-cell">Status</th>
            <th className="hidden md:table-cell">Payment</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {ordersError && (
            <tr>
              <td>
                <ErrorMessage msg={ordersError} />
              </td>
            </tr>
          )}
          {areOrdersLoading && (
            <tr>
              <td>
                <BeatLoader color="#fff" />
              </td>
            </tr>
          )}
          {orders &&
            !areOrdersLoading &&
            orders.map((order, index) => (
              <tr
                key={index}
                className={`h-[48px] text-center font-semibold ${index === 0 || index % 2 === 0 ? "bg-mediumPurple" : "bg-lightPurple"}`}
              >
                <td className="hidden 2xl:table-cell">{order._id}</td>
                <td>{order.user.name}</td>
                <td className="hidden items-center justify-center xs:table-cell">
                  {order.orderItems.length}
                </td>
                <td>{formatDate(order.createdAt)}</td>
                <td className="hidden md:table-cell">
                  {order.isDelivered ? (
                    <span className="rounded-md border-none bg-lightGreen px-[10px] py-[6px] text-darkGreen">
                      Delivered
                    </span>
                  ) : (
                    <span className="rounded-md border-none bg-lightOrange px-[10px] py-[6px] text-mediumOrange">
                      Unfulfilled
                    </span>
                  )}
                </td>
                <td className="hidden md:table-cell">
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
                    <span>{formatter(order.totalAmount, currency.cur)}</span>
                  ) : (
                    <span>{formatter(order.totalPrice, currency.cur)}</span>
                  )}
                </td>
                <td>
                  <div className="flex w-full items-center justify-center">
                    <Link
                      to={`/admin/profile/orderlist/details/${order._id}`}
                      className="flex w-fit items-center justify-center rounded-md border-none bg-darkGrey/70 px-2 py-2 hover:bg-lightGrey hover:text-black"
                    >
                      <FaRegPenToSquare />
                    </Link>
                  </div>
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

export default OrderList;
