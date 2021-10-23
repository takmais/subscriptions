import React from 'react';
import InnerWrap from './InnerWrapper';

const SubscribeButton = props => {
  return (
    <div className="subscribe-bar">
      <InnerWrap>
        <button className={props.isClickable === 'active' && 'active'} type="button" onClick={props.checkForSubscriptions}>Review Subscriptions</button>
      </InnerWrap>
    </div>
  )  
}

export default SubscribeButton;