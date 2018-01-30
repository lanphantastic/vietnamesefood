import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
  // const index = this.props.index;
  // const details = this.props.details;
  // These two variables are combined on line 9
  render(){
    const { details, index } = this.props;
    const isAvailable = details.status === 'available';
    const buttonText = isAvailable? 'Add To Order' : 'Sold Out!';
    return(
      <li className="menu-fish">
        <img src={this.props['details']['image']} alt={details['name']}/>
        <h3 className="fish-name">
          {details['name']}
          <span className="price">{formatPrice(details['price'])}</span>
        </h3>
        <p>{details['desc']}</p>
        <button onClick={ ()=> this.props.addToOrder(index)} disabled={!isAvailable}>{buttonText}</button>
      </li>
    )
  }
}

export default Fish;
