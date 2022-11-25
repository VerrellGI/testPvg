import dashboard from "./dashboard.svg";
import balance from "./balance.svg";
import transaction from "./transaction.svg";
import product from "./product.svg";
import channel from "./channel.svg";
import logout from "./logout.svg";
import budi from "./budi.png";
import arrow from "./arrow.svg";
import burgerBar from "./burgerBar.svg";
import maxim from "./maxim.png";
import telkomsel from "./telkomsel.png";
import three from "./three.png";
import ovo from "./ovo.png";
import PLN from "./PLN.png";
import lossArrow from "./lossArrow.png";
import profitArrow from "./profitArrow.png";
import rightArrow from "./rightArrow.png";
import p1 from "./p1.png";
import p2 from "./p2.png";
import p3 from "./p3.png";
import p4 from "./p4.png";
import p5 from "./p5.png";

import { useState } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import LineChart from "./components/lineChart";

function App() {
  const [isActive, setIsActive] = useState("");
  const dates = {
    "04 Apr ‘22": 2000000,
    "06 Apr ‘22": 2500000,
    "08 Apr ‘22": 1500000,
    "10 Apr ‘22": 2500000,
    "12 Apr ‘22": 1800000,
  };
  const [userData, setUserData] = useState({
    datasets: [
      {
        label: "SalesChart",
        data: dates,
        // backgroundColor: '#545DFF',
        borderColor: '#545DFF',
        tension: 0.4,
        fill: true,
      },
    ],
  });

  const onClickItem = (item) => {
    setIsActive(item);
    console.log(item);
  };

  return (
    <div className="mainBody container">
      <div className="row">
        <div className="leftCol col-2">
          <h2 className="text-center">SalesDash</h2>
          <div className="">
            <div
              className="leftButton d-flex"
              onClick={() => onClickItem("Dashboard")}
            >
              <img src={dashboard} width="10%"></img>
              <span
                style={isActive === "Dashboard" ? { color: "#545dff" } : {}}
              >
                Dashboard
              </span>
              <div className={isActive === "Dashboard" ? "isSelect" : ""}></div>
            </div>
            <div
              className="leftButton d-flex"
              onClick={() => onClickItem("Balance")}
            >
              <img src={balance} width="10%"></img>
              <span style={isActive === "Balance" ? { color: "#545dff" } : {}}>
                {" "}
                Balance
              </span>
              <div className={isActive === "Balance" ? "isSelect" : ""}></div>
            </div>
            <div
              className="leftButton d-flex"
              onClick={() => onClickItem("Transaction")}
            >
              <img src={transaction} width="10%"></img>
              <span
                style={isActive === "Transaction" ? { color: "#545dff" } : {}}
              >
                {" "}
                Transaction
              </span>
              <div
                className={isActive === "Transaction" ? "isSelect" : ""}
              ></div>
            </div>
            <div
              className="leftButton d-flex"
              onClick={() => onClickItem("Product")}
            >
              <img src={product} width="10%"></img>
              <span style={isActive === "Product" ? { color: "#545dff" } : {}}>
                {" "}
                Product
              </span>
              <div className={isActive === "Product" ? "isSelect" : ""}></div>
            </div>
            <div
              className="leftButton d-flex"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
              onClick={() => onClickItem("Channel")}
            >
              <img src={channel} width="10%"></img>
              <span> Channel</span>
              <div className="arrow col-2 mt-2">
                <img src={arrow} width="18px"></img>
              </div>
            </div>
            <div class="collapse mx-5" id="collapseExample">
              <div
                className="leftButton d-flex"
                onClick={() => onClickItem("Agent")}
              >
                <span style={isActive === "Agent" ? { color: "#545dff" } : {}}>
                  Agent
                </span>
                <div className={isActive === "Agent" ? "isSelect" : ""}></div>
              </div>
              <div
                className="leftButton d-flex"
                onClick={() => onClickItem("Balance1")}
              >
                <span
                  style={isActive === "Balance" ? { color: "#545dff" } : {}}
                >
                  Balance
                </span>
                <div
                  className={isActive === "Balance1" ? "isSelect" : ""}
                ></div>
              </div>
              <div
                className="leftButton d-flex"
                onClick={() => onClickItem("Transaction1")}
              >
                <span
                  style={isActive === "Transaction" ? { color: "#545dff" } : {}}
                >
                  Transaction
                </span>
                <div
                  className={isActive === "Transaction1" ? "isSelect" : ""}
                ></div>
              </div>
            </div>
            <hr></hr>
            <div className="leftButton">
              <img src={logout} width="10%"></img>
              <span>Logout</span>
            </div>
          </div>
          <div></div>
        </div>
        <div className=" middleCol col-7">
          <div>
            <h2>Dashboard</h2>
            <p>Today’s date: Sun, 10 April 2022</p>
          </div>
          <div className="row mb-3">
            <div className="col-4">
              <div className="firstCard ">
                <p className="cardTitle">Profit</p>
                <h3>Rp 11.500.000</h3>
                <div className="d-flex justify-content-end">
                  <img
                    className="mx-2"
                    src={lossArrow}
                    width="14px"
                    height="14px"
                  ></img>
                  <span className="red"> 0.3% compared to 7 days ago</span>
                </div>
              </div>
            </div>
            <div className=" col-4">
              <div className="firstCard ">
                <p className="cardTitle">Sales</p>
                <h3>Rp 56.000.000</h3>
                <div className="d-flex justify-content-end">
                  <img
                    className="mx-2 mt-1"
                    src={profitArrow}
                    width="14px"
                    height="14px"
                  ></img>
                  <span className="green"> 0.5% compared to 7 days ago</span>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="firstCard ">
                <p className="cardTitle">Transaction</p>
                <div className="row">
                  <h3 className="col-4">1.090</h3>
                  <span className="spn col-8">transactions</span>
                </div>
                <div className="d-flex justify-content-end">
                  <img
                    className="mx-2 mt-1"
                    src={rightArrow}
                    width="14px"
                    height="14px"
                  ></img>
                  <span className="yellow"> same as 7 days ago</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <div className="middleCard p-2">
                <div>
                  <p>Sales Chart</p>
                </div>
                <div className="">
                  <LineChart chartData={userData}
                   />
                </div>
                {/* <canvas id="myChart" style="width:100%;max-width:600px"></canvas> */}
              </div>
              <div className="bottomCard">
                <p>Top 5 Product</p>
                <div className="d-flex flex-wrap justify-content-center">
                  <div className="productCard">
                    <img
                      className=""
                      src={maxim}
                      width="50px"
                      height="50px"
                    ></img>
                    <h6>Maxim</h6>
                    <p className="p2">150.000</p>
                    <div className="d-flex align-item-center">
                      <p className="number mx-1">120</p>
                      <p className="word">transactions</p>
                    </div>
                  </div>
                  <div className="productCard">
                    <img src={telkomsel} width="50px" height="50px"></img>
                    <h6>Telkomsel</h6>
                    <p>25.000</p>
                    <div className="d-flex align-item-center">
                      <p className="number mx-1">98</p>
                      <p className="word">transactions</p>
                    </div>
                  </div>
                  <div className="productCard">
                    <img src={three} width="50px" height="50px"></img>
                    <h6>Three</h6>
                    <p>50.000</p>
                    <div className="d-flex align-item-center">
                      <p className="number mx-1">74</p>
                      <p className="word">transactions</p>
                    </div>
                  </div>
                  <div className="productCard">
                    <img src={ovo} width="50px" height="50px"></img>
                    <h6>Ovo</h6>
                    <p>100.000</p>
                    <div className="d-flex align-item-center">
                      <p className="number mx-1">68</p>
                      <p className="word">transactions</p>
                    </div>
                  </div>
                  <div className="productCard">
                    <img src={PLN} width="50px" height="50px"></img>
                    <h6>PLN Postpaid</h6>
                    <p>ㅤ</p>
                    <div className="d-flex align-item-center">
                      <p className="number mx-1">50</p>
                      <p className="word"> transactions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="rightCard">
                <p className="mx-2 p-2">Top 5 Agents</p>
                <div className="row mx-2 my-2">
                  <div className="col-4">
                    <div className="imageAgent">
                      <img className="imageProfile" src={p1} width="100%"></img>
                    </div>
                  </div>
                  <div className="col-8">
                    <h6 className="h6Title">PT Suka Maju Jakarta</h6>
                    <div className="row">
                      <div className="col-4">
                        <p className="pLeftCol">Profit</p>
                      </div>
                      <div className="col-8">
                        <p className="pRightCol">Rp. 3.700.000 </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4">
                        <p className="pLeftCol">Sales</p>
                      </div>
                      <div className="col-8">
                        <p className="pRightCol">Rp. 7.230.000 </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4">
                        <p className="pLeftCol">Transaction</p>
                      </div>
                      <div className="col-8">
                        <p className="pRightCol">43 Transaction</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mx-2 my-2">
                  <div className="col-4">
                    <div className="imageAgent">
                      <img className="imageProfile" src={p2} width="100%"></img>
                    </div>
                  </div>
                  <div className="col-8">
                    <h6 className="h6Title">Susi Susanti</h6>
                    <div className="row">
                      <div className="col-4">
                        <p className="pLeftCol">Profit</p>
                      </div>
                      <div className="col-8">
                        <p className="pRightCol">Rp. 3.700.000 </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4">
                        <p className="pLeftCol">Sales</p>
                      </div>
                      <div className="col-8">
                        <p className="pRightCol">Rp. 5.230.000 </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4">
                        <p className="pLeftCol">Transaction</p>
                      </div>
                      <div className="col-8">
                        <p className="pRightCol">37 Transaction</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mx-2 my-2">
                  <div className="col-4">
                    <div className="imageAgent">
                      <img className="imageProfile" src={p3} width="100%"></img>
                    </div>
                  </div>
                  <div className="col-8">
                    <h6 className="h6Title">Toko Pulsa III Depok</h6>
                    <div className="row">
                      <div className="col-4">
                        <p className="pLeftCol">Profit</p>
                      </div>
                      <div className="col-8">
                        <p className="pRightCol">Rp. 2.860.000 </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4">
                        <p className="pLeftCol">Sales</p>
                      </div>
                      <div className="col-8">
                        <p className="pRightCol">Rp. 4.500.000 </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4">
                        <p className="pLeftCol">Transaction</p>
                      </div>
                      <div className="col-8">
                        <p className="pRightCol">38 Transaction</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mx-2 my-2">
                  <div className="col-4">
                    <div className="imageAgent">
                      <img className="imageProfile" src={p4} width="100%"></img>
                    </div>
                  </div>
                  <div className="col-8">
                    <h6 className="h6Title">PT Suka Maju Bogor</h6>
                    <div className="row">
                      <div className="col-4">
                        <p className="pLeftCol">Profit</p>
                      </div>
                      <div className="col-8">
                        <p className="pRightCol">Rp. 2.400.000 </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4">
                        <p className="pLeftCol">Sales</p>
                      </div>
                      <div className="col-8">
                        <p className="pRightCol">Rp. 4.800.000 </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4">
                        <p className="pLeftCol">Transaction</p>
                      </div>
                      <div className="col-8">
                        <p className="pRightCol">40 Transaction</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mx-2 my-2">
                  <div className="col-4">
                    <div className="imageAgent">
                      <img className="imageProfile" src={p5} width="100%"></img>
                    </div>
                  </div>
                  <div className="col-8">
                    <h6 className="h6Title">Anton Antoman</h6>
                    <div className="row">
                      <div className="col-4">
                        <p className="pLeftCol">Profit</p>
                      </div>
                      <div className="col-8">
                        <p className="pRightCol">Rp. 2.350.000 </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4">
                        <p className="pLeftCol">Sales</p>
                      </div>
                      <div className="col-8">
                        <p className="pRightCol">Rp. 2.100.000 </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4">
                        <p className="pLeftCol">Transaction</p>
                      </div>
                      <div className="col-8">
                        <p className="pRightCol">20 Transaction</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rightCol col-3">
          <div className="d-flex justify-content-center">
            <div className="mx-2 text-center d-flex align-items-center ">
              <div className="image">
                <img className="imageProfile" src={budi}></img>
              </div>
            </div>
            <div className="mx-2 mt-3 title">
              <h6>Budi Budiman</h6>
              <p>Owner at PT Suka Maju</p>
            </div>
            <div className="mx-2 arrow">
              <img src={arrow} width=""></img>
            </div>
          </div>
          <div className="card text-center">
            <div className="m-2">
              <span>Total balance</span>
              <img className="float-end" src={burgerBar} width="1%"></img>
            </div>
            <h2>Rp 1.580.000.000</h2>
            <div>
              <button>Top Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
