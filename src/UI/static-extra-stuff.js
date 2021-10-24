import InnerWrap from './InnerWrapper';

const ExtraStuff = () => {
  return (
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
  )
}

export default ExtraStuff;