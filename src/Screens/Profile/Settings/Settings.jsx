import React from "react";
import "./settings.css";
import BackIcon from "../../../assets/icons/BackIcon";
import ArrowrightIcon from "../../../assets/icons/ArrowrightIcon";
import LogoutIcon from "../../../assets/icons/Profile/LogoutIcon";
import DeleteAccountIcon from "../../../assets/icons/Profile/DeleteAccountIcon";
import { useNavigate } from "react-router-dom";

function Settings({ logOut }) {
  const navigate = useNavigate();

  return (
    <div className="perso-info-container">
      <div className="container-settings">
        <div className="navigate">
          <BackIcon />

          <p className="name-page">Settings</p>
        </div>

        <div className="settings-conatiner">
          <div className="container-value-settings">
          <div className="line-settings"></div>
          <div className="detail-info-settings">
            <p className="value-info">Langue</p>
            <ArrowrightIcon />
          </div>
          </div>
          <div className="container-value-settings">

          <div className="line-settings"></div>
          <div className="detail-info-settings">
            <p className="value-info">About App</p>
            <ArrowrightIcon />
          </div>
          </div>
          <div className="container-value-settings">

          <div className="line-settings"></div>
          <div className="detail-info-settings">
            <p className="value-info">Help</p>
            <ArrowrightIcon />
          </div>
          </div>
          <div className="container-value-settings">

          <div className="line-settings"></div>
          <div
            className="detail-info-settings"
            onClick={() => {
              logOut();
              navigate("/");
            }}
          >
            <p className="value-info">Log out</p>
            <LogoutIcon />
          </div>
          </div>
          <div className="container-value-settings">

          <div className="line-settings"></div>
          <div className="detail-info-settings">
            <p className="value-info" style={{ color: "red" }}>
              Delet Account
            </p>
            <DeleteAccountIcon />
          </div>
          <div className="line-settings"></div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
