import React from 'react';
import Headbar from '../../components/Toolbar/Headbar';
import InputCategory from '../../components/List/InputCategory';


const InputPage = () => {
    const saryo_data = [
        {
            id : 1,
            name : "건식사료",
            icon : "/main/fodderex.png"
        },
        {
            id : 2,
            name : "습식사료",
            icon : "/main/fodderex.png"
        },
        {
            id : 3,
            name : "소프트사료",
            icon : "/main/fodderex.png"
        },
        {
            id : 4,
            name : "에어/동결사료",
            icon : "/main/fodderex.png"
        },
        {
            id : 5,
            name : "건식사료",
            icon : "/main/fodderex.png"
        },
        {
            id : 6,
            name : "습식사료",
            icon : "/main/fodderex.png"
        },
        {
            id : 7,
            name : "소프트사료",
            icon : "/main/fodderex.png"
        },
    ];

    return (
        <div>
        <div className="pt-3"><Headbar title="입력하기" input={true} count={3}></Headbar></div>
            <div className="pt-1"><InputCategory title="사료" data={saryo_data}></InputCategory></div>
            <div className="pt-4"><InputCategory title="간식" data={saryo_data}></InputCategory></div>
            <div className="pt-4"><InputCategory title="전체" data={saryo_data}></InputCategory></div>

        </div>
    );
};

export default React.memo(InputPage);