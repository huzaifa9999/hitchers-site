import React from "react";
import { Link } from "react-router-dom";
import "./pricingcard.css";

export const Pricingcard = () => {
  return (
    <>
      <div className="mainall">
        <div className="card">
          <div className="heading">
            <h3>-Basic-</h3>
            <p classname="divison">____</p>
            <p className="currency">3 USD</p>
            <p className="detail">-acc-</p>
            <p className="detail">-acc-</p>
            <p className="detail">-acc-</p>

            <Link to="/contact" className="redirect">
              Book
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="heading">
            <h3>-Basic-</h3>
            <p classname="divison">____</p>
            <p className="currency">3 USD</p>
            <p className="detail">-acc-</p>
            <p className="detail">-acc-</p>
            <p className="detail">-acc-</p>

            <Link to="/contact" className="redirect">
              Book
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="heading">
            <h3>-Basic-</h3>
            <p classname="divison">____</p>
            <p className="currency">3 USD</p>
            <p className="detail">-acc-</p>
            <p className="detail">-acc-</p>
            <p className="detail">-acc-</p>

            <Link to="/contact" className="redirect">
              Book
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
