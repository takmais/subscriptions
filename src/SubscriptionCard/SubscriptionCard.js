const SubscriptionCard = props => {
  const handleSubscribe = event => {
    props.handleUpdateSubscription(props.id, event.target.checked)
  }
  let subscriptionClass = props.isChecked ? "isSubscribed subscription" : "subscription"
  return (
    <div className={subscriptionClass}>
      <img src="https://via.placeholder.com/200x100" />
      <div className="inner">
        <h3 className="title">{props.title}</h3>
        <p>(Quarterly) The most popular content on bcg.com.</p>
      </div>
      <div className="inputs">
        <input type="checkbox" onChange={handleSubscribe} />
        <label>Subscribe</label>
      </div>
     </div>  
   )
}

export default SubscriptionCard;