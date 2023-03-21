// import { restaurantList } from "./contants";
// import RestaurantCard from "./RestaurantCard";
// import { useState, useEffect } from "react";
// import Shimmer from "./Shimmer";

// function filterData(searchText, restaurants) {
//   // 8 restraunt list = > filtered  rest with "King"
//   const filterData = restaurants.filter((restaurant) =>
//     restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
//   );

//   return filterData;
// }

// const Body = () => {
//   const [allRestaurants, setAllRestaurants] = useState([]);
//   const [filteredRestaurants, setFilteredRestaurants] = useState([]);
//   const [searchText, setSearchText] = useState("");

//   // empty dependency array => once after render
//   // dep arry [searchText] => once after initial render + everytime after redern (my searchText changes)
//   useEffect(() => {
//     // API call
//     getRestaurants();
//   }, []);

//   async function getRestaurants() {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&page_type=DESKTOP_WEB_LISTING"
//     );
//     const json = await data.json();
//     console.log(json);
//     // Optional Chaining
//     setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
//     setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
//   }

//   console.log("render");

//   // not render component (Early return)
//   if (!allRestaurants) return null;

//   if (filteredRestaurants?.length === 0)
//     return <h1>No Restraunt match your Filter!!</h1>;

//   return allRestaurants?.length === 0 ? (
//     <Shimmer />
//   ) : (
//     <>
//       <div className="search-container">
//         <input
//           type="text"
//           className="search-input"
//           placeholder="Search"
//           value={searchText}
//           onChange={(e) => {
//             setSearchText(e.target.value);
//           }}
//         />
//         <button
//           className="search-btn"
//           onClick={() => {
//             //need to filter the data
//             const data = filterData(searchText, allRestaurants);
//             // update the state - restaurants
//             setFilteredRestaurants(data);
//           }}
//         >
//           Search
//         </button>
//       </div>
//       <div className="restaurant-list">
//         {/* You have to write logic for NO restraunt fount here */}
//         {filteredRestaurants.map((restaurant) => {
//           return (
//             <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Body;

/////////////////////////////////
//props = properties
import { useEffect, useState } from "react";
import { restaurantList } from "./contants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurent) =>
    restaurent?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [AllRestaurants, setAllRestaurants] = useState([]);
  // let searchTxt = "kfc";
  const [FilteredRestaurants, setFilteredRestaurants] = useState([]);
  //searchText is a local state variable
  const [searchInput, setSearchInput] = useState(""); //to create state variables

  // const searchClicked = false;

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    setAllRestaurants(json?.data?.cards[1]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[1]?.data?.data?.cards);
  }
  console.log(AllRestaurants);
  //not rendered components (early return)
  if (!AllRestaurants) return null;
  // if (FilteredRestaurants?.length === 0)
  //   return <h1>No restaurant match your Filter!!</h1>;

  return AllRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />

        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data here...
            const data = filterData(searchText, AllRestaurants);
            //update the state - restaurent
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {/*You have to write logic for NO restraunt fount here */}
        {FilteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
