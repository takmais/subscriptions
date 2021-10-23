import React from 'react';

const SubscribeModal = props => {
  return (
    <div className="subscribe-modal">
      <div className="subscribe-modal-contents">
        <span className="close-modal" onClick={props.closeModal}>Close Modal</span>
        <h2>You are subscribing to:</h2>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" />
        {props.subscriptions.map(subscription => {
          return <li key={subscription.id}>{subscription.title}</li>
        })}
        <button type="submit" className="subscribe-button">Subscribe</button>
      </div>
    </div>
  )
}

export default SubscribeModal;