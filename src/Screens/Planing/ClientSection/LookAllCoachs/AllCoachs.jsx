import React from "react";
import "./allCoachs.css";
import CloseIcon from "../../../../assets/icons/Planing/CloseIcon";
import Checked from "../../../../assets/icons/Planing/Checked";
import PinIcon from "../../../../assets/icons/Planing/PinIcon";
import Unchecked from "../../../../assets/icons/Planing/Unchecked";

function AllCoachs() {
  return (
    <div className="container">
      <div className="container-page">
        <div className="icon-X">
          <CloseIcon />
        </div>
        <div className="title-page">
          <p
            style={{
              color: "#000",
              fontFamily: "Inter",
              fontSize: "22px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
            }}
          >
            Sending booking requests to caochs
          </p>
          <p
            style={{
              color: "var(--grey-2, rgba(119, 114, 114, 0.60))",
              textAlign: "center",
              fontFamily: "Inter",
              fontSize: "13px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
              marginTop: 8,
            }}
          >
            The first to accept your request will share your session
          </p>
          <div className="line"></div>
        </div>
        <p className="domaine-coaching">Fitness</p>
        <div className="container-coach">
          {/* coach checked */}
          <div className="detail-coach">
            <div className="header-coach">
              <div className="image-user"></div>
              <div style={{ margin: 13 }}>
                <Checked />
              </div>
            </div>
            <div className="info-coach">
              <p
                style={{
                  color: "var(--Black, #3F3C3C)",
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "normal",
                  margin: 1,
                  padding: 1,
                }}
              >
                Malek Hizaoui
              </p>
              <p
                style={{
                  color: "var(--Green, #519750)",
                  fontFamily: "Inter",
                  fontSize: "13px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "normal",
                  margin: 1,
                  padding: 1,
                }}
              >
                disponible
              </p>
              <div style={{ flexDirection: "row", display: "flex" }}>
                {/* <PinIcon/> */}
                <PinIcon />
                <p
                  style={{
                    color: "var(--grey-2, rgba(119, 114, 114, 0.60))",
                    fontFamily: "Inter",
                    fontSize: "13px",
                    fontStyle: "normal",
                    fontWeight: 700, // Use 700 for "font-weight" to set it to bold
                    lineHeight: "normal",
                    margin: 1,
                  padding: 1,
                  }}
                >
                  genève
                </p>
              </div>
            </div>
          </div>

          {/* Coach not  checked */}

          <div className="detail-coach">
            <div className="header-coach">
              <div className="image-user noChecked"></div>
              <Unchecked />
            </div>
            <div className="info-coach">
              <p
                style={{
                  color: "var(--Black, #3F3C3C)",
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "normal",
                  margin: 1,
                  padding: 1,
                }}
              >
                Malek Hizaoui
              </p>
              <p
                style={{
                  color: "var(--Green, #519750)",
                  fontFamily: "Inter",
                  fontSize: "13px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "normal",
                  margin: 1,
                  padding: 1,
                }}
              >
                disponible
              </p>
              <div style={{ flexDirection: "row", display: "flex" }}>
                <PinIcon />
                <p
                  style={{
                    color: "var(--grey-2, rgba(119, 114, 114, 0.60))",
                    fontFamily: "Inter",
                    fontSize: "13px",
                    fontStyle: "normal",
                    fontWeight: 700, // Use 700 for "font-weight" to set it to bold
                    lineHeight: "normal",
                    marginLeft: 4,
                    margin: 1,
                    padding: 1,
                  }}
                >
                  genève
                </p>
              </div>
            </div>
          </div>
          {/* <div className="detail-coach">
            <div className="header-coach">
              <div className="image-user noChecked"></div>
              <Unchecked />
            </div>
            <div className="info-coach">
              <p
                style={{
                  color: "var(--Black, #3F3C3C)",
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "normal",
                }}
              >
                Malek Hizaoui
              </p>
              <p
                style={{
                  color: "var(--Green, #519750)",
                  fontFamily: "Inter",
                  fontSize: "13px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "normal",
                }}
              >
                disponible
              </p>
              <div style={{ flexDirection: "row", display: "flex" }}>
                <PinIcon />
                <p
                  style={{
                    color: "var(--grey-2, rgba(119, 114, 114, 0.60))",
                    fontFamily: "Inter",
                    fontSize: "13px",
                    fontStyle: "normal",
                    fontWeight: 700, // Use 700 for "font-weight" to set it to bold
                    lineHeight: "normal",
                    marginLeft: 4,
                  }}
                >
                  genève
                </p>
              </div>
            </div>
          </div>
          <div className="detail-coach">
            <div className="header-coach">
              <div className="image-user noChecked"></div>
              <Unchecked />
            </div>
            <div className="info-coach">
              <p
                style={{
                  color: "var(--Black, #3F3C3C)",
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "normal",
                }}
              >
                Malek Hizaoui
              </p>
              <p
                style={{
                  color: "var(--Green, #519750)",
                  fontFamily: "Inter",
                  fontSize: "13px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "normal",
                }}
              >
                disponible
              </p>
              <div style={{ flexDirection: "row", display: "flex" }}>
                <PinIcon />
                <p
                  style={{
                    color: "var(--grey-2, rgba(119, 114, 114, 0.60))",
                    fontFamily: "Inter",
                    fontSize: "13px",
                    fontStyle: "normal",
                    fontWeight: 700, // Use 700 for "font-weight" to set it to bold
                    lineHeight: "normal",
                    marginLeft: 4,
                  }}
                >
                  genève
                </p>
              </div>
            </div>
          </div>
          <div className="detail-coach">
            <div className="header-coach">
              <div className="image-user noChecked"></div>
              <Unchecked />
            </div>
            <div className="info-coach">
              <p
                style={{
                  color: "var(--Black, #3F3C3C)",
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "normal",
                }}
              >
                Malek Hizaoui
              </p>
              <p
                style={{
                  color: "var(--Green, #519750)",
                  fontFamily: "Inter",
                  fontSize: "13px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "normal",
                  margin: 0,
                  padding: 0,
                }}
              >
                disponible
              </p>
              <div
                style={{
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: "center",
                  margin: 0,
                  padding: 0,
                }}
              >
                <PinIcon />
                <p
                  style={{
                    color: "var(--grey-2, rgba(119, 114, 114, 0.60))",
                    fontFamily: "Inter",
                    fontSize: "13px",
                    fontStyle: "normal",
                    fontWeight: 700, // Use 700 for "font-weight" to set it to bold
                    lineHeight: "normal",
                    margin: 0,
                    padding: 0,
                  }}
                >
                  genève
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <footer style={{ width: "100%" }}>
        <button
          style={{
            // position: "fixed",
            marginBottom: 100,
            width: "80%",
            height: 50,
            borderRadius: "10px",
            background: "var(--Purple-1, #5D54A0)",
            color: "var(--white, #FFFBFB)",
            textAlign: "center",
            fontFamily: "Inter",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
            textTransform: "capitalize",
          }}
        >
          Send Request
        </button>
      </footer>
    </div>
  );
}

export default AllCoachs;
