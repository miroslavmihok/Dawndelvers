import React from "react";
import { Link } from "react-router-dom";

function CompletedOrder({ completedOrder }) {
  return (
    <div className="flex flex-col items-center justify-start text-center">
      <h1 className="mb-6">Order Has Been Placed!</h1>
      <hr className="h-[1px] w-full" />
      <span className="mt-6 text-xl font-bold leading-normal">
        Order #{completedOrder._id}
      </span>
      <p className="my-6 leading-normal">
        Thank you for your order! Your order has been successfully placed. To
        view details about your order, including the items purchased and the
        delivery date, please click on the "Order Information" button below.
      </p>
      <Link
        to={`profile/orders/${completedOrder._id}`}
        className="flex w-full max-w-full items-center justify-center rounded-md bg-mediumPurple p-[8px] font-semibold hover:bg-lightPurple md:max-w-[200px]"
      >
        <span>Order information</span>
      </Link>
    </div>
  );
}

export default CompletedOrder;
