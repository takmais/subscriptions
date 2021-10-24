import React, { useEffect } from 'react';

const SubscribeModal = props => {
  const handleUnsubscribe = (id) => {
    props.onUnsubscribe(id, false)
  }
  return (
    <div className="subscribe-modal">
      <div className="subscribe-modal-contents">
        <span className="close-modal" onClick={props.closeModal}>Close Modal</span>
        <h2>You are subscribing to:</h2>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" />
        <ul>
          {props.subscriptions.map(subscription => {
            return <li key={subscription.id}>{subscription.title} <span className="remove-subscription" onClick={() => handleUnsubscribe(subscription.id)}>(X)</span></li>
          })}
        </ul>
        <button type="submit" className="subscribe-button">Subscribe</button>
      </div>
    </div>
  )
}

export default SubscribeModal;