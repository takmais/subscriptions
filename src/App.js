import React, {useEffect, useState} from 'react';
import InnerWrap from './UI/InnerWrapper';
import SubscribeModal from './SubscriptionModal/SubscriptionModal';
import SubscribeButton from './UI/Button';
import SubscriptionCard from './SubscriptionCard/SubscriptionCard';
import TopOfPage from './UI/static-top-of-page';
import ExtraStuff from './UI/static-extra-stuff';
import './App.css';

const App = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showSubmitButton, setShowSubmitButton] = useState(false);
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
    },{
      title: 'Shape the Future of Health Cars',
      id: Math.random(),
      isChecked: false
    }
  ])

  useEffect(() => {
    setShowSubmitButton(subscriptions.length > 0);

    if (subscriptions.length === 0) setShowModal(false);
  }, [subscriptions]);
  
  useEffect(() => {
    let _subscriptions = cards.filter(card => {
      return card.isChecked === true;
    });
    
    setSubscriptions(_subscriptions);
  }, [cards]);

  const clearSelections = () => {
    let _cards = [...cards];
    _cards.map(card => {
      return card.isChecked = false;
    })
    setCards(_cards);
  }

  const selectAllSubscriptions = () => {
    let _cards = [...cards];
    _cards.map(card => {
      return card.isChecked = true;
    })
    setCards(_cards);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  const updateSubscriptionCheckedState = (id, isSubscribed) => {
    let tmp = [...cards];
    tmp.find(card => card.id === id).isChecked = isSubscribed;
    setCards(tmp);
  }
  
  return (
    <>
      <TopOfPage />

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

      {showModal && <SubscribeModal subscriptions={subscriptions} closeModal={closeModal} onUnsubscribe={updateSubscriptionCheckedState}/>}

      <SubscribeButton checkForSubscriptions={() => { setShowModal(true) }} isClickable={showSubmitButton} onClearSelection={clearSelections} onSelectAll={selectAllSubscriptions}/>

      <ExtraStuff />
    </>
   )
}

export default App;