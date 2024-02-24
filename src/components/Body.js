import RestraurantCard from "./RestraurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  //Local state variable - super powerful variable
  const [listOfRestraurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  console.log("body rendered");

  useEffect(() => {
    console.log("callback is called and rendered");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setListOfRestaurant(
      //optional channing
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // no need of mockdata now, we are taking through live api of swiggy.

  //using shimmer UI
  //Condition Rendering
  // if (listOfRestraurant.length === 0) {
  //   return <Shimmer />;
  // }
  // or using terniory operator
  return listOfRestraurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestraurant.filter(
              (res) => parseFloat(res.info.avgRating) > 4.4
            );
            setListOfRestaurant(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search food or Restraurant"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="btn"
          onClick={() => {
            //filter the restraurant and update the UI
            // serch text
            console.log(searchText);

            const filteredRestaurant = listOfRestraurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>
      </div>
      <div className="restro-container">
        {filteredRestaurant.map((restuarant) => (
          // we can use any name in place of restuarant as it is normal name. resdata also we can take any name
          <Link
            key={restuarant.info.id}
            to={"/restaurants/" + restuarant.info.id}
          >
            <RestraurantCard resData={restuarant} />
          </Link>
          // <RestraurantCard resData={resList[0]} />
        ))}
      </div>
    </div>
  );
};

export default Body;
