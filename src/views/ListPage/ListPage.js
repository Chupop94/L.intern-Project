// 홈_입력_검색tab을 눌렀을 때, 밑에서 키보드가 나오는 상황
import React from "react";
import SelectTodayList from "../Menu/SelectTodayList";

import "../../assets/sass/ListPage/ListPage.scss";
import EatenPage from "./EatenPage";
import Headbar from "../../components/Toolbar/Headbar";

const ListPage = () => {
  const pet = JSON.parse(window.sessionStorage.getItem("pet"));
  console.log(pet.name);

  const onInputPage = () => {
    window.location.href ="./InputPage";
  }

  return (
    <div className="w-screen">
    <div className="pt-3">
      <Headbar input={false} title="그릇 추가하기"/>
    </div>
      <p />
      <SelectTodayList name={pet.name}></SelectTodayList>
      <div className="text-center pt-4">
        <button className="rounded-button" onClick={onInputPage}>
          <b>새로 담기</b>
        </button>
      </div>
      <div className="pt-5">
        <EatenPage pet={pet}></EatenPage>
      </div>
    </div>
  );
};

export default React.memo(ListPage);
