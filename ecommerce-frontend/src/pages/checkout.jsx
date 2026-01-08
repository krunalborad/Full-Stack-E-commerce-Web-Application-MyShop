export default function Checkout({ cartItems, total }) {
  return (
    <div style={{ padding: 24 }}>
      <h2>Checkout</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid #ddd",
                padding: "10px 0",
              }}
            >
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}

          <h3 style={{ marginTop: 20 }}>Total: ₹{total}</h3>

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
            Place Order
          </button>
        </>
      )}
    </div>
  );
}