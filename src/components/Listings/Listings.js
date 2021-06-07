import React from "react";
import "./Listings.css";

const Listings = ({ listingsToRender }) => {
  return (
 
      <ul className="listings_card">
        {listingsToRender.map((listings, index) => (
          <div className="card">
            <li key={index}>
              <div className="image_div">
                <img className="image"src={listings.imageURL} alt=" " />
              </div>
              <div className="content">
                <h3>{listings.homeName}</h3>
              </div>

              <p className="price_range"> Starting in the {listings.startingPrice}</p><hr></hr>
              <strong className="listings_details"> Home Details: {listings.sqft}sq. ft {listings.beds} beds {listings.baths} baths {listings.beds}</strong>
            </li>
          </div>
        ))}
      </ul>
  
  );
};
export default Listings;
