import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href="https://kite.zerodha.com" target="_blank" rel="noopener noreferrer">Try demo</a>
          
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn More
            </a>
          </div>
          <div className="mt-3">
            <a href="https://play.google.com/store/apps/details?id=com.zerodha.kite3" target="_blank" rel="noopener noreferrer">
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href= "https://apps.apple.com/in/app/kite-zerodha/id1449453802" target="_blank" rel="noopener noreferrer">
              <img
                src="media/images/appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
