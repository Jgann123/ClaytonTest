import React from "react";
import listings from "../../data/listings";
import "./Listings.css";


const Listings = ({ listingsToRender }) => {
  
 let isMulti = "";
 const theRespose = "MultiSectional";
 {listings.map((entry, index) => {
    {if(entry.isMultiSection = true && entry.homeName != "The Bordeaux") {
       return (entry.isMultiSection = theRespose);
    }
  };
  })};

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
              
              <strong  className="listings_details"> Home Details: {listings.sqft}sq. ft {listings.beds} beds {listings.baths} baths  <br></br> <span id="multi">{listings.isMultiSection}</span> </strong>
            </li>
          </div>
        ))}
      </ul>
  
  );
};
export default Listings;

