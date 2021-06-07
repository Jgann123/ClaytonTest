import React from 'react';
import { Helmet } from 'react-helmet';
import HomeListingCard from '../components/HomeListingCard';
import { HomeStyles } from './Home.styled';

const Home = () => {

  return (
      <HomeStyles>

        <Helmet>
            <title>TODO: Your Page Title</title>
            <meta name="description" content="TODO: Your Page Description" />
        </Helmet>

        <HomeListingCard />
        
        <h3>TODO: Code Challenge</h3>

        <ol>
          <li>Create the Claytonhomes.com Home Listings page attached. Make sure this page displays properly on all viewport sizes, 
          from mobile to a larger desktop. Designs have been provided for desktop (1440px) and mobile (375px) views. Make sure the page 
          looks good on the tablet size as well. You may arrange the listing cards as you see fit.</li>

          <li>In the dropdown in the upper right, the following sort options should be included:
            <ul>
              <li>Sort by Price: Low to High</li>
              <li>Sort by Price: High to Low</li>
            </ul>
          </li>

          <li>On initial page load, a maximum of 9 listing cards should be shown on all viewport sizes. 
  If there are more than 9 listing cards, provide a “load more” button that will load in 3 images each time the button is clicked/tapped.</li>

          <li>Extra credit: Feel free to use your creativity to spice up the project in any way you see fit.</li>
        </ol>

        <h3>Listing Card - Empty Component to Fill</h3>
        <HomeListingCard />

      </HomeStyles>
  )
};

export default Home;
