import { useState } from "react";

function Address() {
  const [paymentMethod, setPaymentMethod] = useState("COD");

  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    city: "",
    pincode: ""
  });

  const handleOrder = () => {
    if (paymentMethod === "CARD") {
      demoCardPayment();
    } else {
      submitOrder("COD", "PENDING");
    }
  };

  const demoCardPayment = () => {
    const card = prompt("Enter Card Number (Demo)");
    const cvv = prompt("Enter CVV (Demo)");

    if (!card || !cvv) {
      alert("Payment cancelled");
      return;
    }

    alert("Payment Successful (Demo)");
    submitOrder("CARD", "PAID");
  };

  const submitOrder = (method, status) => {
    fetch("http://localhost:5000/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cartItems,
        total,
        address,
        paymentMethod: method,
        paymentStatus: status
      })
    })
      .then(res => res.json())
      .then(() => {
        alert("Order placed successfully!");
        localStorage.removeItem("cart");
      });
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>Delivery Address</h2>

      <input placeholder="Name"
        onChange={e => setAddress({ ...address, name: e.target.value })}
      /><br />

      <input placeholder="Phone"
        onChange={e => setAddress({ ...address, phone: e.target.value })}
      /><br />

      <input placeholder="City"
        onChange={e => setAddress({ ...address, city: e.target.value })}
      /><br />

      <input placeholder="Pincode"
        onChange={e => setAddress({ ...address, pincode: e.target.value })}
      /><br /><br />

      {/* ✅ PAYMENT OPTIONS */}
      <h3>Payment Method</h3>

      <label>
        <input
          type="radio"
          checked={paymentMethod === "COD"}
          onChange={() => setPaymentMethod("COD")}
        />
        Cash on Delivery
      </label>

      <br />

      <label>
        <input
          type="radio"
          checked={paymentMethod === "CARD"}
          onChange={() => setPaymentMethod("CARD")}
        />
        Card Payment (Demo)
      </label>

      <br /><br />

      <button onClick={handleOrder}>
        Place Order
      </button>
    </div>
  );
}

export default Address;