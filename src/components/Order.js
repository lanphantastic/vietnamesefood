import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {
  render() {
    // access the value of fish1, fish2, fish3, etc. as an array
    const orderIds = Object.keys(this.props.order);

    const total = orderIds.reduce((prevTotal, key) => {

      // access the particular fish and its count from the fishes and order objects. fish = fish1: and all of its keys/values.

      // remember that fishes is a hash with many fish1: desc, image..., fish2: desc, image, price, etc. The same go with order object; order: {{fish1: #}, {fish2: #}}
      const fish = this.props.fishes[key]; // access the key/pair of that fish we further use its name, price, desc etc.
      const count = this.props.order[key]; //access the value of that fish.

      // check if the seafood is available to add to order
      const isAvailable = fish && fish['status'] === 'available';
      if(isAvailable) {
        return prevTotal + (count * fish['price'] || 0)
      }
      return prevTotal;
    }, 0);

    return (
      <div className="oreder-wrap">
        <h2>Your Order</h2>
        <ul className="order">
          <p>{orderIds}</p>
          <li className="total">
            <strong>Total:</strong>{formatPrice(total)}
          </li>
        </ul>
      </div>
    )
  }
}

export default Order;
