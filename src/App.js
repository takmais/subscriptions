import React, {useEffect, useState} from 'react';
import InnerWrap from './UI/InnerWrapper';
import SubscribeModal from './SubscriptionModal/SubscriptionModal';
import SubscribeButton from './UI/Button';
import SubscriptionCard from './SubscriptionCard/SubscriptionCard';
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
      <div className="top-of-page">
        <InnerWrap>
          <h1>Subscriptions</h1>
          <div className="subtitle">Stay connected with BCG's latest content. Select from our newsletters below and enter your email to subscribe.</div>
          <h2>Featured Newsletters</h2>
        </InnerWrap>
      </div>

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
      <SubscribeButton checkForSubscriptions={() => { setShowModal(true) }} isClickable={showSubmitButton} onClearSelection={clearSelections}/>

      <div className="extra-stuff">
        <InnerWrap>
          <div className="column">
            <h2>E-Alerts</h2>
            <p>(Monthly) The latest BCG content, curated based on your specified areas of interest. Select your topics below</p>
            <div class="dropdown"> Select Industries</div>
            <div class="dropdown"> Select Business Topic</div>
          </div>
          <div className="column">
            <h2>Regional Publications</h2>
            <input type="checkbox" />
            <label>BCG Bytes from Australia and New Zealand</label>
            <p className="lighter">(Biweekly) Stay connected to ANZ's business updates and regional focus topics.</p>
          </div>
        </InnerWrap>
      </div>
    </>
   )
}

export default App;