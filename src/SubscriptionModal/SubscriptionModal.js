import React, { useState } from 'react';

const SubscribeModal = props => {
  const [showSignup, setShowSignup] = useState(false);
  const handleUnsubscribe = (id) => {
    props.onUnsubscribe(id, false)
  }
  const handleShowSignup = e => {
    if (e.target.value.length > 0) setShowSignup(true);
    else setShowSignup(false);
  }
  return (
    <div className="subscribe-modal">
      <div className="subscribe-modal-contents">
        <span className="close-modal" onClick={props.closeModal}>Close Modal</span>
        <h2>You are subscribing to:</h2>
        <ul>
          {props.subscriptions.map(subscription => {
            return <li key={subscription.id}>{subscription.title} <span className="remove-subscription" onClick={() => handleUnsubscribe(subscription.id)}>(X)</span></li>
          })}
        </ul>
        <label htmlFor="email">Please enter your Email address to subscribe or email/password to sign up</label><br />
        <input type="email" id="email" placeholder="email" />
        <input type="password" id="password" onChange={handleShowSignup} placeholder="password" /><br />

        {showSignup && <button type="submit" className="signup">Sign Up</button>}
        <button type="submit" className="subscribe-button">Subscribe</button>
      </div>
    </div>
  )
}

export default SubscribeModal;