import React from 'react';
import Iframe from 'react-iframe'

const Events = () => {
  return (
    <main className="events">
      <section>
        <h2 className="events-title">UPCOMING EVENTS</h2>
        <Iframe
          className="calendar"
          url="https://calendar.google.com/calendar/embed?&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=Y2hpbmtpbm1hQGdtYWlsLmNvbQ&amp;src=bWFzb24uY2hpbmtpbkBnbWFpbC5jb20&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%233F51B5&amp;color=%237986CB&amp;color=%23009688&amp;showCalendars=0&amp;showTabs=0&amp;showPrint=0&amp;showNav=1&amp;showTitle=0"
        />

      </section>
    </main>
  );
}

export default Events;
