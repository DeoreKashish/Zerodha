import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className=" p-3 " id="supportWrapper">
        <h5>Support Portal</h5>
        <a href="">Track Tickets</a>
      </div>
      <div className=" row p-5 m-3">
        <div className=" col-6 p-3">
          <h1 className="fs-3" style={{lineHeight:"40px"}}>
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do i activated F&O, why is my order getting rejected.. " />
          <br />
          <a href="" style={{marginLeft:"6px"}}>Track account opening,  </a>
          <a href="" style={{marginLeft:"6px"}}> Track segment activation, </a>
          <a href="" style={{marginLeft:"6px"}}> Intraday margins, </a>
          <a href="" style={{marginLeft:"6px"}}> Kite user manual </a>
        </div>
        <div className=" col-6 p-3 ">
          <h1>Featured</h1>
          <ol style={{lineHeight:"40px"}}>
            <li>
              {" "}
              <a href="">Current Takeovers and Delisting-January 2024</a>
            </li>
            <li>
              {" "}
              <a href="">Latest Intraday leverages-MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
