import React from 'react';

const SubscribeModal = props => {
  return (
    <div className="subscribe-modal">
      <div className="subscribe-modal-contents">
        <h2>You are subscribing to:</h2>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" />
        {props.subscriptions.map(subscription => {
          return <li key={subscription.id}>{subscription.title}</li>
        })}
      </div>
    </div>
  )
}

export default SubscribeModal;