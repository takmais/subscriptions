import React, {useEffect, useState} from 'react';
import InnerWrap from './UI/InnerWrapper';
import SubscribeModal from './SubscriptionModal/SubscriptionModal';
import SubscribeButton from './UI/Button';
import SubscriptionCard from './SubscriptionCard/SubscriptionCard';
import './App.css';

const App = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [cards, setCards] = useState([
    {
      title: 'Top Ten Most Read',
      id: Math.random(),
      isChecked: false
    },{
      title: 'Featured Insights',
      id: Math.random(),
      isChecked: false
    },{
      title: 'BCG Henderson Institute',
      id: Math.random(),
      isChecked: false
    },{
      title: 'Change Your Trajectory',
      id: Math.random(),
      isChecked: false
    },{
      title: 'Leadership By Design',
      id: Math.random(),
      isChecked: false
    },{
      title: 'Next-Gen Work',
      id: Math.random(),
      isChecked: false
    },{
      title: 'Perspectives on Strategy and Value',
      id: Math.random(),
      isChecked: false
    }
  ])
  
  const onCheckForSubscriptions = () => {
    if (subscriptions.length > 0) setShowModal(true);
  }
  
  useEffect(() => {
    let _subscriptions = cards.filter(card => {
      return card.isChecked === true;
    });
    
    console.log('_subscriptions: ', _subscriptions);
    setSubscriptions(_subscriptions);
    
    console.log('subscriptions: ', subscriptions);
  }, [cards]);
  
  const updateSubscriptionCheckedState = (id, isSubscribed) => {
    console.group();
    console.log('updating subscriptions Checked State');
    console.log('id: ', id);
    console.log('isSubscribed: ', isSubscribed);
    console.groupEnd();
    
    // https://www.codegrepper.com/code-examples/javascript/react+state+array+of+objects
    let tmp = [...cards];
    tmp.find(card => card.id === id).isChecked = isSubscribed;
    setCards(tmp);
  }
  
  return (
    <>
      <div className="subscriptions">
        <InnerWrap>
          {cards.map(card => <SubscriptionCard 
                               key={card.id} 
                               id={card.id} 
                               isChecked={card.isChecked} 
                               handleUpdateSubscription={updateSubscriptionCheckedState} 
                               title={card.title}/>)}
        </InnerWrap>
      </div>
      {showModal && <SubscribeModal subscriptions={subscriptions}/>}
      <SubscribeButton checkForSubscriptions={onCheckForSubscriptions} isClickable={subscriptions.length > 0 && 'active'} />
    </>
   )
}

export default App;