import React from "react";
import egg1 from "../images/egg.jpg";
import egg2 from "../images/egg-2.jpg";

const Content = () => {
  return (
    <>
      <div className="card-menu">
        <img src={egg1} alt="" className="h-full rounded mb-10 shadow" />
        <div className="card-text">
          <h2 className="text-2xl mb-2">Egg Muffins</h2>
          <p className="mb-2">Cripsy, delicious and nutritious.</p>
          <span>$15</span>
        </div>
      </div>

      <div className="card-menu">
        <img src={egg2} alt="" className="h-full rounded mb-10 shadow" />
        <div className="card-text">
          <h2 className="text-2xl mb-2">Egg Salad</h2>
          <p className="mb-2">Cripsy, delicious and nutritious.</p>
          <span>$17</span>
        </div>
      </div>
    </>
  );
};

export default Content;
