"use client";
import React, { useState } from "react";
import Container from "../shared/container/Container";
import Button from "../ui/button/Button";
import Pagination from "../ui/pagination/Pagination";

interface Order {
  id: string;
  productName: string;
  amount: string;
  purchaseDate: string;
  paymentStatus: "paid" | "pending" | "failed";
  orderStatus:
    | "order-received"
    | "in-transit"
    | "delivered"
    | "returned"
    | "cancelled";
}

const initialOrders: Order[] = [
  {
    id: "#444231",
    productName: "Dog",
    amount: "$850.00",
    purchaseDate: "2025-07-25",
    paymentStatus: "paid",
    orderStatus: "delivered",
  },
  {
    id: "#444232",
    productName: "Cat",
    amount: "$650.00",
    purchaseDate: "2025-08-01",
    paymentStatus: "paid",
    orderStatus: "in-transit",
  },
  {
    id: "#444233",
    productName: "Rabbit",
    amount: "$350.00",
    purchaseDate: "2025-09-10",
    paymentStatus: "pending",
    orderStatus: "order-received",
  },
  {
    id: "#444234",
    productName: "Birds",
    amount: "$150.00",
    purchaseDate: "2025-07-15",
    paymentStatus: "paid",
    orderStatus: "returned",
  },
  {
    id: "#444235",
    productName: "Fish",
    amount: "$120.00",
    purchaseDate: "2025-06-25",
    paymentStatus: "failed",
    orderStatus: "cancelled",
  },
  {
    id: "#444236",
    productName: "Hamster",
    amount: "$100.00",
    purchaseDate: "2025-05-12",
    paymentStatus: "paid",
    orderStatus: "delivered",
  },
  {
    id: "#444237",
    productName: "Turtle",
    amount: "$200.00",
    purchaseDate: "2025-04-22",
    paymentStatus: "pending",
    orderStatus: "in-transit",
  },
];

const statusFlow: Order["orderStatus"][] = [
  "order-received",
  "in-transit",
  "delivered",
  "returned",
  "cancelled",
];

const statusLabels: Record<Order["orderStatus"], string> = {
  "order-received": "Order Received",
  "in-transit": "In Transit",
  delivered: "Delivered",
  returned: "Returned",
  cancelled: "Cancelled",
};

const statusColors: Record<Order["orderStatus"], string> = {
  "order-received": "accent-orange-400",
  "in-transit": "accent-orange-400",
  delivered: "accent-green-500",
  returned: "accent-red-400",
  cancelled: "accent-gray-400",
};

const OrderRow: React.FC<{ order: Order }> = ({ order }) => {
  const [selected, setSelected] = useState(false);
  const activeIndex = statusFlow.indexOf(order.orderStatus);

  return (
    <div className="md:bg-bg-color-two bg-white mb-4 rounded-lg font-title shadow-sm">
      {/* Header */}
      <div className="grid md:grid-cols-6 grid-cols-2 gap-4 p-4 border-b border-gray-200 items-center w-full">
        {/* Checkbox + Order ID */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={selected}
            onChange={(e) => setSelected(e.target.checked)}
            className="w-4 h-4 accent-primary"
          />
          <div>
            <div className="text-xs text-gray-500 mb-1">Order ID</div>
            <div className="text-sm font-medium">{order.id}</div>
          </div>
        </div>

        {/* Product */}
        <div>
          <div className="text-xs text-gray-500 mb-1">Product</div>
          <div className="text-sm font-medium">{order.productName}</div>
        </div>

        {/* Amount */}
        <div>
          <div className="text-xs text-gray-500 mb-1">Amount</div>
          <div className="text-sm font-medium">{order.amount}</div>
        </div>

        {/* Purchase Date */}
        <div>
          <div className="text-xs text-gray-500 mb-1">Purchase Date</div>
          <div className="text-sm font-medium">{order.purchaseDate}</div>
        </div>

        {/* Payment Status */}
        <div>
          <div className="text-xs text-gray-500 mb-1">Payment Status</div>
          <div
            className={`text-sm font-medium ${
              order.paymentStatus === "paid"
                ? "text-green-600"
                : order.paymentStatus === "pending"
                ? "text-primary"
                : "text-red-500"
            }`}
          >
            {order.paymentStatus === "paid" && "✓ Paid"}
            {order.paymentStatus === "pending" && "⧗ Pending"}
            {order.paymentStatus === "failed" && "✗ Failed"}
          </div>
        </div>

        {/* Action */}
        <div>
          <div className="text-xs text-gray-500 mb-1">Action</div>
          <Button size="sm">View Details</Button>
        </div>
      </div>

      {/* Order Tracking */}
      <div className="p-4 md:bg-bg-color-two bg-white">
        {/* Desktop: all statuses */}
        <div className="hidden md:grid md:grid-cols-6 gap-6 text-sm text-gray-700">
          <label className="font-medium text-gray-600">Order Tracking:</label>
          {statusFlow.map((status, idx) => {
            const isCompleted = idx <= activeIndex;
            const isCurrent = idx === activeIndex;
            const colorClass = isCurrent
              ? statusColors[status]
              : isCompleted
              ? "accent-green-500"
              : "accent-gray-400";

            return (
              <label
                key={status}
                className={`flex items-center gap-2 ${
                  isCurrent ? "font-semibold text-black" : "text-gray-600"
                }`}
              >
                <input
                  type="checkbox"
                  checked={isCompleted}
                  readOnly
                  className={`w-4 h-4 ${colorClass}`}
                />
                {statusLabels[status]}
              </label>
            );
          })}
        </div>

        {/* Mobile: only one status */}
        <div className="flex md:hidden items-center gap-3 text-sm text-gray-700">
          <span className="font-medium text-gray-600">Status:</span>
          <span
            className={`flex items-center gap-2 font-semibold ${
              order.orderStatus === "delivered"
                ? "text-green-600"
                : order.orderStatus === "cancelled"
                ? "text-gray-500"
                : order.orderStatus === "returned"
                ? "text-red-500"
                : "text-primary"
            }`}
          >
            <input
              type="checkbox"
              checked
              readOnly
              className={`w-4 h-4 ${statusColors[order.orderStatus]}`}
            />
            {statusLabels[order.orderStatus]}
          </span>
        </div>
      </div>
    </div>
  );
};

const OrderList: React.FC = () => {
  // Pagination setup
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalItems = initialOrders.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const currentOrders = initialOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen py-10">
      <Container>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Order List</h1>
          <Button
            className="pr-2 w-[168px]"
            iconPosition="left"
            href="/shop"
            icon={
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            }
          >
            Buy More
          </Button>
        </div>

        {/* Paginated Orders */}
        <div>
          {currentOrders.map((order) => (
            <OrderRow key={order.id} order={order} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
          className="mt-10"
        />
      </Container>
    </div>
  );
};

export default OrderList;
