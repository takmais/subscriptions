const SubscriptionCard = ({id, title, isChecked, handleUpdateSubscription}) => {
  const handleSubscribe = event => {
    handleUpdateSubscription(id, event.target.checked)
  }
  let subscriptionClass = isChecked ? "isSubscribed subscription" : "subscription"
  return (
    <div className={subscriptionClass}>
      <img src="https://via.placeholder.com/200x100" />
      <div className="inner">
        <h3 className="title">{title}</h3>
        <p>(Quarterly) The most popular content on bcg.com.</p>
      </div>
      <div className="inputs">
        <input type="checkbox" onChange={handleSubscribe} checked={isChecked}/>
        <label>Subscribe</label>
      </div>
     </div>  
   )
}

export default SubscriptionCard;