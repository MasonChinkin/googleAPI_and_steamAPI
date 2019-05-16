import React from 'react';

const Home = () => {
  return (
    <main className='home'>
      <section className="home-title">
        <h1>We are Sigma Tactical</h1>
        <h2>A Squad-centric gaming community</h2>
      </section>
      <section className="motto-container">
        <div className="motto">
          <h2>GOOD PEOPLE</h2>
          <p>Its easier to fix a bad shooter than a bad personality. Sig-Tac prides ourselves on being a community of reasonably tolerable people.</p>
        </div>
        <div className="motto">
          <h2>GOOD TIMES</h2>
          <p>We are here to win, to get better, to enjoy the challenge, but at the end of the day we are here to have fun and enjoy the company of our friends.</p>
        </div>
        <div className="motto">
          <h2>GOOD META</h2>
          <p>To maximize your capacity in the game, you must first understand its limits and where it deviates from reality. We strive to actualize these mechanisms to leverage in game.</p>
        </div>
      </section>
    </main>
  );
}

export default Home;
