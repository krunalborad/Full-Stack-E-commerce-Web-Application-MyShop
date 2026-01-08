import { Link, useLocation } from "react-router-dom";

export default function OrderSuccess() {
  const location = useLocation();
  const orderData = location.state; // Get order data passed from payment page

  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h2>✅ Order Placed Successfully</h2>
      <p>Thank you for shopping with MyShop</p>

      {orderData && (
        <div style={{ marginTop: 20, textAlign: "left", display: "inline-block" }}>
          <p>
            <strong>Payment Method:</strong> {orderData.paymentMethod === "CARD" ? "Card Payment" : "Cash on Delivery"}
          </p>
          <p>
            <strong>Payment Status:</strong> {orderData.paymentStatus}
          </p>
          <p>
            <strong>Total Amount:</strong> ₹{orderData.total}
          </p>
        </div>
      )}

      <Link to="/">
        <button
          style={{
            marginTop: 20,
            padding: "10px 20px",
            background: "#4f46e5",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Continue Shopping
        </button>
      </Link>
    </div>
  );
}