import React, {PureComponent} from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default class TagList extends PureComponent {

  items = [
    "닭고기",
    "완두콩",
    "닭고기분말",
    "탈수 가금육",
    "쌀",
    "동물성 지방",
    "소고기",
    "완두콩 단백질",
    "병아리콩",
    "동물성단백질",
    "유기농쌀",
    "유기농현미",
    "옥수수",
    "육분",
    "대두박"
  ];

  tagitems = this.items.map(name => {
    return (
      <button
        className="tag-slide-item"
        //태그박스를 가져옴
        onClick={() => this.props.updateTagbox(name)}
        key={name}
      >
        {name}
      </button>
    );
  });

  responsive = {
    0: { items: 2.3 },
    1024: { items: 10 }
  };

  stagepadding = {
    paddingLeft: 50,
    paddingRight: 100
  };

  render() {
    return (
      <AliceCarousel
        items={this.tagitems}
        infinite={true}
        responsive={this.responsive}
        dotsDisabled={true}
        buttonsDisabled={true}
        fadeOutAnimation={false}
        mouseTrackingEnabled={true}
        playButtonEnabled={false}
        isPrevSlideDisabled
        isNextS
        lideDisabled
        stagePadding={this.stagepadding}
      />
    );
  }
}
