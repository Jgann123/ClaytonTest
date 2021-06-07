import React, { useState, useEffect, createRef } from "react";
import Listings from "../Listings/Listings";
import listings from "../../data/listings";
import "./Display.css";
import Footer from "../Footer/Footer";

const listingsPerPage = 9;
var arrayForListings = [];

const Display = () => {
  const [listingsToShow, setListingsToShow] = useState([]);
  const [next, setNext] = useState(9);
  const [selection, setSelection] = useState("");
  //looping through the array and asigning it a start and finish. The prams here are asigned values in the useEffect hook.
  const loopWithSlice = (start, end) => {
    const slicedListings = listings.slice(start, end);
    arrayForListings = [...arrayForListings, ...slicedListings];
    setListingsToShow(arrayForListings);
  };


  const lowestToHighest = arrayForListings.sort((a, b) => {
    return a.startingPrice - b.startingPrice;
    if(lowestToHighest){
      return(listingsToShow = lowestToHighest);
    }
  });

  //sorting the Array from price lowest to highest.
  // I would have refactored this by creating a seperate component for the dropdown and used props. I wanted to turn this in on time:). 
  const theOption = selection;

  if (theOption == "highestToLowest") {
    const highestToLowestSort = arrayForListings.sort((a, b) => {
      return b.startingPrice - a.startingPrice;
      if (ref.value == "highestestToLowest") {
        return (listingsToShow = highestToLowestSort);
      } else {
        return (listingsToShow = highestToLowestSort);
      }
    });
  } else if (theOption == "lowestToHighest") {
    const lowestToHighestSort = arrayForListings.sort((a, b) => {
      return a.startingPrice - b.startingPrice;
      if (ref.value == "lowestToHighest") {
        return (listingsToShow = lowestToHighestSort);
      } else {
        return (listingsToShow = lowestToHighestSort);
      }
    });
  }


  useEffect(() => {
    loopWithSlice(0, listingsPerPage);

  }, []);

  //handing the listings being displayed.
  const handleShowMoreListings = () => {
    loopWithSlice(next, next + listingsPerPage);
    setNext(next + listingsPerPage);
  };

  return (
    <div>
      <div id="price_drop_list_container">
        <label className="label">Sort by price:</label>
        <select
          className="ui search dropdown"
          
          onChange={(e) => {
            const selectedValue = e.target.value;
            setSelection(selectedValue);
          }}
        >
          <option value="lowestToHighest">Lowest To Highest</option>
          <option className="option" value="highestToLowest">
            Highest To Lowest
          </option>
        </select>
      </div>

      <Listings listingsToRender={listingsToShow} />
      <div className="buttons_div">
        <button onClick={handleShowMoreListings}>Load More</button>
      </div>
      <Footer />
    </div>
  );
};

export default Display;
