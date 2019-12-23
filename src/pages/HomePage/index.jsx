import React from "react";
import "./HomePage.css";
import Card from "../../components/Card";
import SmallCard from "../../components/SmallCard";

const HomePage = () => {
  return (
    <>
      <main>
        <section className="main-grid mv4 pb4 bb b--black-10">
          {/* aside left */}
          <inner className="aside-left ">
            <div className="flex items-center justify-between">
              <h2 className="mv3 w-100">Sponsored</h2>
              <p>i</p>
            </div>
            <Card />
          </inner>

          {/* main content left */}
          <inner className="main-content--left ">
            {/* Articles = cards */}
            <div className="flex items-center justify-between">
              <h2 className="mv3 w-100">Reviewed</h2>
              <p>i</p>
            </div>
            <Card />
          </inner>

          {/* main content right */}
          <inner className="main-content--right ">
            <div className="flex items-center justify-between">
              <h2 className="mv3">Noted</h2>
              <p>i</p>
            </div>
            <Card />
          </inner>

          {/* aside right */}
          <inner className="aside-right">
            <div className="flex items-center justify-between">
              <h2 className="mv3">Linked</h2>
              <p>i</p>
            </div>
            <Card />
          </inner>
        </section>
        <section className="secondary-grid mv4">
          <div className="secondary-title">
            <h2>Spotted</h2>
          </div>
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
        </section>
      </main>
      {/* Footer Grid  gtc: 1fr 1fr 2fr 2fr*/}
      <footer className="footer-grid bg-light-green">
        <section className="footer-aside--left">Aside Left</section>
        <section className="footer-aside--right">Aside Left</section>
        <section className="footer-main--left">Aside Left</section>
        <section className="footer-main--right">Aside Left</section>
      </footer>
    </>
  );
};

export default HomePage;
