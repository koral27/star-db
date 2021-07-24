import React from 'react';

import './item-details.css'

import ErrorButton from '../error-button';
import { withDetailsData } from '../hoc-helpers';



const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  )
}
export { Record };


const ItemDetails = (props) => {
  const { item, image, children } = props;

  return (
    <div className="item-details card">
      <img className="item-image"
        src={image}
        alt="" />

      <div className="card-body">
        <h4>{item.name}</h4>
        <ul className="list-group list-group-flush">
          { 
            React.Children.map(children, (child) => {
              return React.cloneElement(child, { item });
            }) 
          }
        </ul>
        <ErrorButton />
      </div>
    </div>
  )
}

export default withDetailsData(ItemDetails);