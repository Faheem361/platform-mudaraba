import React from "react";
import LineTop from "../../assets/lineTop.png";
import GiftBox from "../../assets/GiftBox.png";
import RedMan from "../../assets/redman.png";
import whiteman from "../../assets/whiteman.png";
import whitegirl from "../../assets/whitegirl.png"
function Roadcard() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-3 ">
              <div className="row d-flex justify-content-center">
                <div className="col-md-12 card_bg">
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-12 mt-5">
                      {/* <img src={LineTop} className="img-fluid"/> */}
                      <div className="text-artbook">Artbook</div>
                      <div className="text-center mt-5 mb-5">
                        <img
                          src={GiftBox}
                          className="img-fluid"
                          width={"150px"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 card_bg mt-3">
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-12 mt-5">
                      {/* <img src={LineTop} className="img-fluid"/> */}
                      <div className="text-artbook">Merchandise</div>
                      <div className="text-center mt-5 mb-5">
                        <img
                          src={whiteman}
                          className="img-fluid"
                          width={"110px"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 "><div className="col-md-12 card2_bg mt-3">
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-12 mt-3">
                      {/* <img src={LineTop} className="img-fluid"/> */}
                      <div className="text-Collectables">Collectables</div>
                      <div className="text-center mt-5 mb-5">
                        <img
                          src={RedMan}
                          className="img-fluid"
                          width={"350px"}
                        />
                      </div>
                    </div>
                  </div>
                </div></div>
            <div className="col-md-3 ">
            <div className="row d-flex justify-content-center">
                <div className="col-md-12 card3_bg">
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-12 mt-5">
                      {/* <img src={LineTop} className="img-fluid"/> */}
                      <div className="text-artbook">Merchandise</div>
                      <div className="text-center mt-5 mb-5">
                        <img
                          src={whitegirl}
                          className="img-fluid"
                          width={"230px"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadcard;
