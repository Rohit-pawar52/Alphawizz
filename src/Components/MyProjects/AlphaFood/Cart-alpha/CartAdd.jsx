import React, { useState } from "react";
import "./CartAdd.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
function CartAdd() {
  const [quantity, setQuantity] = useState(1); // Initialize quantity with 1

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  return (
    <>
      <div className="cart-payment">
        <div className="cart-table">
          <table>
            <thead>
              <th>Image</th>
              <th>Product</th>
              <th>Price</th>
              <th>Tax(%)</th>
              <th>Quantity</th>
              <th>Subtotle</th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    src="Images/Alpha-slider/paneer.png"
                    alt=""
                    style={{ height: "60px", width: "60px" }}
                  />
                </td>
                <td>
                  Paneer<br></br>
                  <p className="cart-save-button">Save for later</p>
                </td>
                <td>&#8377;210</td>
                <td>5</td>
                <td>
                  <div className="quantity-button">
                    <button
                      onClick={decrement}
                      className="px-1 text-lg font-semibold"
                    >
                      -
                    </button>
                    <span className="px-2">{quantity}</span>
                    <button
                      onClick={increment}
                      className="px-2 text-lg font-semibold"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>&#8377;210</td>
                <td>
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="icon-cart-delete"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="Images/Alpha-slider/paneer.png"
                    alt=""
                    style={{ height: "60px", width: "60px" }}
                  />
                </td>
                <td>
                  Paneer<br></br>
                  <p className="cart-save-button">Save for later</p>
                </td>
                <td>&#8377;210</td>
                <td>5</td>
                <td>
                  <div className="quantity-button">
                    <button
                      onClick={decrement}
                      className="px-1 text-lg font-semibold"
                    >
                      -
                    </button>
                    <span className="px-2">{quantity}</span>
                    <button
                      onClick={increment}
                      className="px-2 text-lg font-semibold"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>&#8377;210</td>
                <td>
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="icon-cart-delete"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="Images/Alpha-slider/paneer.png"
                    alt=""
                    style={{ height: "60px", width: "60px" }}
                  />
                </td>
                <td>
                  Paneer<br></br>
                  <p className="cart-save-button">Save for later</p>
                </td>
                <td>&#8377;210</td>
                <td>5</td>
                <td>
                  <div className="quantity-button">
                    <button
                      onClick={decrement}
                      className="px-1 text-lg font-semibold"
                    >
                      -
                    </button>
                    <span className="px-2">{quantity}</span>
                    <button
                      onClick={increment}
                      className="px-2 text-lg font-semibold"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>&#8377;210</td>
                <td>
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="icon-cart-delete"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="cart-totle-table">
          <p className="h4 pb-2">Cart Totle</p>
          <p className="h6">price Details</p>
          <div>
            <p>MRP(1 items)</p>
            <p>&#36;120.00 </p>
          </div>
          <div>
            <p>Delivery fee</p>
            <p>&#36;10.00 </p>
          </div>
          <div>
            <p>Discount</p>
            <p>&#36;80.00 </p>
          </div>
          <hr />
          <div>
            <p>Totle Amount</p>
            <p className="text-danger">&#36;130.00 </p>
          </div>
          <div>
            <p className="proceed-button">Proceed to buy</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartAdd;
