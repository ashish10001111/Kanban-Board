import React from "react";
import "./DashBoard.css";
import Card from "./Card";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelector } from "react-redux";

const DashBoard = () => {
  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );
  return (
    selectedData && (
      <div className="dashboardContainer" style={{ justifyContent: "space-evenly" }}>
        {selectedData.map((elem, index) => (
          <div key={index} className="dashboardCardContainer">
            <div className="dashCardHeading flexx">
              <div className="leftView">
                {!user ? (
                  <></>
                ) : (
                  <>
                    <div
                      className="imageContainer relative"
                      style={{ width: "15px", height: "15px", display: 'inline-block' }}
                    >
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%",
                        }}
                        src="https://cdn1.vectorstock.com/i/1000x1000/61/50/avatar-business-man-graphic-vector-9646150.jpg"
                        alt="UserImage"
                      />
                    </div>
                  </>
                )}
                <span>
                  {" "}
                  {elem[index]?.title} {elem[index]?.value?.length}
                </span>
              </div>
              <div className="rightView">
                <AiOutlinePlus />{" "}
                <span style={{ letterSpacing: "2px" }}>...</span>
              </div>
            </div>
            <div className="dashList flex-gap-10">
              {elem[index]?.value?.map((elem, ind) => (
                <Card id={elem.id} title={elem.title} tag={elem.tag} key={ind} />
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default DashBoard;

