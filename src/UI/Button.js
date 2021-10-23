import React from 'react';
import InnerWrap from './InnerWrapper';

const SubscribeButton = ({isClickable, checkForSubscriptions, onClearSelection}) => {
  return (
    <div className="subscribe-bar">
      <InnerWrap>
        <button className={isClickable ? 'active' : ''} type="button" onClick={onClearSelection}>Clear Selections</button>
        <button className={isClickable ? 'active' : '' } type="button" onClick={checkForSubscriptions}>Review Subscriptions</button>
      </InnerWrap>
    </div>
  )  
}

export default SubscribeButton;