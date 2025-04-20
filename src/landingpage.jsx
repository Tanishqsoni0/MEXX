// MealUI.jsx
import React from "react";
import "./landingpage.css";

const MealUI = () => {
  return (
    <div className="meal-container">
      <aside className="sidebar">
        <div className="pen-icon" />
        <input className="search-bar" placeholder="Search For Items" />
        <nav className="nav-icons">
          <div className="icon home" />
          <div className="icon graph" />
          <div className="icon calendar" />
          <div className="icon cart" />
        </nav>
        <div className="user-section">
          <div className="meal-tag">Breakfast</div>
          <div className="username">ishikaeloooo</div>
        </div>
      </aside>

      <main className="main-panel">
        <div className="meal-content">
          <div className="header-section">
            <h2>Welcome</h2>
            <p>Manage your meals with us</p>
          </div>

          <div className="meal-diagram">
            <div className="circle breakfast">Breakfast</div>
            <div className="cancel">Cancel</div>
            <div className="circle lunch">Lunch</div>
            <div className="circle dinner">Dinner</div>
          </div>

          <button className="advance">Advance</button>
        </div>

        <section className="right-content">
          <div className="cards">
            <div className="card">Wallet $</div>
            <div className="card">Meals</div>
            <div className="card">Ticket</div>
          </div>

          <div className="calendar">
            <p className="month">JANUARY25 📅</p>
            <div className="week">
              <span className="day active">
                MON
                <br />1
              </span>
              <span className="day">
                TUE
                <br />2
              </span>
              <span className="day">
                WED
                <br />3
              </span>
              <span className="day">
                THU
                <br />4
              </span>
              <span className="day">
                FRI
                <br />5
              </span>
              <span className="day">
                SAT
                <br />6
              </span>
              <span className="day">
                SUN
                <br />7
              </span>
            </div>
          </div>

          <div className="highlight-box">
            <button className="highlight-btn">Breakfast</button>
          </div>
        </section>

        <div className="top-icons">
          <span className="bell" />
          <span className="utensils" />
          <span className="avatar" />
          <span className="menu">Menu</span>
        </div>
      </main>
    </div>
  );
};

export default MealUI;
