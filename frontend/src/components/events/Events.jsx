import React from 'react';
import Iframe from 'react-iframe'
import Loader from 'react-loader-spinner';
import classNames from 'classnames';


const Events = () => {
  const [loaded, setLoaded] = React.useState(false)

  const spinner = !loaded ?
    <Loader
      type="Triangle"
      color="black"
      height="300"
      width="300"
    /> :
    null

  const iFrameClasses = classNames('calendar', {
    'loaded': loaded
  })

  return (
    <main className="events">
      <section>
        <h2 className="events-title">UPCOMING EVENTS</h2>
        <Iframe
          className={iFrameClasses}
          url="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23c8c8c8&amp;ctz=America%2FChicago&amp;src=ZGsxcmExZzk2bjB1OTc4cWgzaTRvcmY0Nm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23B39DDB&amp;showTitle=0&amp;showNav=1&amp;showDate=1&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=1&amp;title=Sigma%20Tactical%20Events"
          onLoad={() => setLoaded(true)}
        />
        {spinner}
      </section>
    </main>
  );
}

export default Events;
