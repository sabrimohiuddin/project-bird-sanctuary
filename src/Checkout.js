import React, { useState } from 'react';

function Checkout({ onCheckout }) {
  const [formCompleted, setFormCompleted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormCompleted(true);
    alert('You have adopted birds. Thank you!'); // Update the alert text to match the test expectation
    onCheckout();
  };


  return (
    <div className="Checkout">
      <h2>Checkout</h2>
      {formCompleted ? (
        <p>Thank you for adopting birds!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input type="text" name="firstName" />
          </label>
          <label>
            Last Name:
            <input type="text" name="lastName" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Credit Card:
            <input type="text" name="creditCard" />
          </label>
          <label>
            Zip Code:
            <input type="text" name="zipCode" />
          </label>
          <input type="submit" value="Submit" />

        </form>
      )}
    </div>
  );
}

export default Checkout;

