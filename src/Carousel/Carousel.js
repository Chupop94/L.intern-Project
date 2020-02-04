import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

class SearchCarousel extends React.Component {
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  state = {
    galleryItems: this.items.map(i => <h5 key={i}>#연관검색어{i}</h5>),
  };

  responsive = {
    0: { items: 1 },
    1024: { items: 2 },
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
        responsive={this.responsive}
        autoPlayInterval={2000}
        autoPlayDirection="rtl"
        autoPlay={false}
        fadeOutAnimation={true}
        mouseTrackingEnabled={true}
        playButtonEnabled={false}
        disableAutoPlayOnAction={true}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
      />
    );
  }
}
export default SearchCarousel;
