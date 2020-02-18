// 홈_입력_검색tab을 눌렀을 때, 밑에서 키보드가 나오는 상황
import React, { useState, useEffect } from "react";

import HttpConnect from "../../http/HttpConnect";

//css
import "../../assets/sass/Search/searchPage.scss";
import Headbar from "../../components/Toolbar/Headbar.js";
import Searchbar from "../../components/Toolbar/Searchbar.js";
import FoodList from "./FoodList";



const SearchPage = ({match}) => {
  const [food_data, setFoodData] = useState(null);
  const [search_data, setSearchData] = useState([]);
  const [count, setCount] = useState(0);
  const { category } = match.params;
  console.log(category);

  //리스트 데이터를 가져오는 부분
  useEffect(() => {
    getFoodList();
    window.sessionStorage.removeItem(`checkedItem`);
  }, []);

  const handleCount = (cnt) => {
    setCount(cnt);
    console.log(cnt);
  }

  const getFoodList = () => {
    var http = new HttpConnect();
    http.url = "/pet/foodlist";
    http.getCallData().then(data => {
      setFoodData(data);
    });
  };

  const handleSearchData = (data) => {
    setSearchData(data);
  }

  const handleFoodData = (data) => {
    setFoodData(data);
  }

  return (
    <div>
      <Headbar title={category} count={count}></Headbar>
      {console.log(count)};
      {food_data !== null ? 
      (<div>
        <Searchbar data={food_data} tag={true} handlesearch={handleSearchData}/>
        <FoodList data={search_data.length > 0 ? search_data : food_data} count={handleCount} all={food_data} />
        </div>
      )
       : null}
    </div>
  );
};

export default SearchPage;
