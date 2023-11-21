import React from "react";
import BackIcon from "../../../../assets/icons/BackIcon";
import ToggleOff from "../../../../assets/icons/Planing/ToggleOff";
import ToggleOn from "../../../../assets/icons/Planing/ToggleOn";
import PayPalIcon from "../../../../assets/icons/Planing/PayPalIcon";
import MasterCardIcon from "../../../../assets/icons/Planing/MasterCardIcon";
import AmexIcon from "../../../../assets/icons/Planing/AmexIcon";
import DinerIcon from "../../../../assets/icons/Planing/DinerIcon";
import VisaIcon from "../../../../assets/icons/Planing/VisaIcon";
import TickIcon from "../../../../assets/icons/Planing/TickIcon";
import "./payment.css";

function PaymentScreen() {
  return (
    <div className="reservation-container">
      <div className="page-container">
        <div className="navigate">
          <div style={{ textAlign: "left", marginRight: 30 }}>
            <BackIcon />
          </div>

          <p className="name-page">Add Payment Methods</p>
        </div>
        <div className="container-pay">
          <div className="container-choose-Method">
            <div className="iconStyle">
              <PayPalIcon />
              <TickIcon/>

            </div>
            <div className="iconStyle">
              <MasterCardIcon />
            </div>
            <div className="iconStyle">
              <AmexIcon />
            </div>
            <div className="iconStyle">
              <DinerIcon />
            </div>
            <div className="iconStyle">
              <VisaIcon />
            </div>
          </div>
          <input className="input-card" placeholder="Name on Card" />
          <input className="input-card" placeholder="Number on Card" />
          <div className="conatiner-detail-card">
            <input className="input-card" placeholder="Month" />
            <input className="input-card" placeholder="Year" />
          </div>
          <div className="conatiner-detail-card">
            <input className="input-card" placeholder="CVC" />
            <p className="text-payment">
              3 or 4 digits usually found on the signature strip
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <ToggleOn />
            <p className="text-payment"> Save your card</p>
          </div>
        </div>
        <button className="btn-pay">Pay</button>
      </div>
    </div>
  );
}

export default PaymentScreen;
