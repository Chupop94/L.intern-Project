import React from "react";
import Headbar from "../../components/Toolbar/Headbar";
import InputCategory from "../../components/List/InputCategory";
import "../../assets/sass/Search/InputPage.scss";

window.onpageshow = function(event) {
  if (event.persisted) {
      document.location.reload();
  }
}

const InputPage = () => {
  //   const saryo_data = [
  //     {
  //       id: 1,
  //       name: "건식사료",
  //       icon: "/main/fodderex.png"
  //     },
  //     {
  //       id: 2,
  //       name: "습식사료",
  //       icon: "/main/fodderex.png"
  //     },
  //     {
  //       id: 3,
  //       name: "소프트사료",
  //       icon: "/main/fodderex.png"
  //     },
  //     {
  //       id: 4,
  //       name: "에어/동결사료",
  //       icon: "/main/fodderex.png"
  //     },
  //     {
  //       id: 5,
  //       name: "건식사료",
  //       icon: "/main/fodderex.png"
  //     },
  //     {
  //       id: 6,
  //       name: "습식사료",
  //       icon: "/main/fodderex.png"
  //     },
  //     {
  //       id: 7,
  //       name: "소프트사료",
  //       icon: "/main/fodderex.png"
  //     }
  //   ];

  const handleRoute = code => {
    switch (code) {
      case 1:
        window.location.href = "/SearchPage/건식사료";
        break;
      case 2:
        window.location.href = "/SearchPage/습식사료";
        break;
      case 3:
        window.location.href = "/SearchPage/소프트사료";
        break;
      case 4:
        window.location.href = "/SearchPage/생식사료";
        break;
        default : 
        break;
    }
  };

  return (
    <div className="w-screen">
      <div className="pt-3">
        <Headbar title="카테고리" badge={false}></Headbar>
      </div>
      {/* <div className="pt-1"><InputCategory title="사료" data={saryo_data}></InputCategory></div>
            <div className="pt-4"><InputCategory title="간식" data={saryo_data}></InputCategory></div>
            <div className="pt-4"><InputCategory title="전체" data={saryo_data}></InputCategory></div> */}
      <div className="flex">
        <div className="btn-wrap" onClick={() => handleRoute(1)}>
          <div className="btn-img">
            <img src="/category/건식사료.png" alt="건식" width="100%" />
          </div>
          <div className="btn-text">
            <b>건식사료</b>
          </div>
        </div>
        <div className="btn-wrap" onClick={() => handleRoute(2)}>
          <div className="btn-img">
            <img src="/category/습식사료.png" alt="습식" width="100%" />
          </div>
          <div className="btn-text">
            <b>습식사료</b>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="btn-wrap" onClick={() => handleRoute(3)}>
          <div className="btn-img">
            <img src="/category/소프트사료.png" alt="소프트" width="100%" />
          </div>
          <div className="btn-text">
            <b>소프트사료</b>
          </div>
        </div>
        <div className="btn-wrap" onClick={() => handleRoute(4)}>
          <div className="btn-img">
            <img src="/category/생식사료.png" alt="생식" width="100%" />
          </div>
          <div className="btn-text">
            <b>생식사료</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(InputPage);
