import React from 'react';
import InnerWrap from './InnerWrapper';

const SubscribeButton = ({isClickable, checkForSubscriptions, onClearSelection, onSelectAll}) => {
  return (
    <div className="subscribe-bar">
      <InnerWrap>
        <div className="left">
          <button className={isClickable ? 'active' : ''} type="button" onClick={onClearSelection}>Clear Selections</button>
          <button type="button" onClick={onSelectAll}>Select All</button>
        </div>
        <div className="right">
          <button className={isClickable ? 'active' : '' } type="button" onClick={checkForSubscriptions}>Review and Subscribe</button>
        </div>
      </InnerWrap>
    </div>
  )  
}

export default SubscribeButton;