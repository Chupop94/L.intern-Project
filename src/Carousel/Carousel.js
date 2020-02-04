import React from "react";
import AliceCarousel from "react-alice-carousel";
import { Button } from "@material-ui/core";
import "react-alice-carousel/lib/alice-carousel.css";

//머지는 머지 merge는 뭐즤?

class SearchCarousel extends React.Component {
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  state = {
    galleryItems: this.items.map(i => (
      <Button variant="outlined" color="primary" size="small" key={i}>
        #검색어{i}
      </Button>
    )),
  };

  responsive = {
    0: { items: 4 },
    1024: { items: 10 },
  };

  stagePadding = {
    paddingLeft: 10, // in pixels
    paddingRight: 10,
  };

  onSlideChange(e) {
    console.debug("Item`s position during a change: ", e.item);
    console.debug("Slide`s position during a change: ", e.slide);
  }

  onSlideChanged(e) {
    console.debug("Item`s position after changes: ", e.item);
    console.debug("Slide`s position after changes: ", e.slide);
  }

  render() {
    return (
      <AliceCarousel
        items={this.state.galleryItems}
        infinite={true}
        responsive={this.responsive}
        dotsDisabled={true}
        buttonsDisabled={true}
        fadeOutAnimation={false}
        mouseTrackingEnabled={true}
        playButtonEnabled={false}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
        isPrevSlideDisabled
        isNextSlideDisabled
      />
    );
  }
}
export default SearchCarousel;
