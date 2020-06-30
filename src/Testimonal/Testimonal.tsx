import React, { useEffect, useState } from "react";
import { Dispatch } from "redux";
import { connect } from 'react-redux'
import { getTestimonalRequest } from "../store/actions";
import { IApp, ISlider } from "../store/reducer";
import "./style.scss";

interface ITestimonal {
  getTestimonal: () => void;
  slider: ISlider;
};

const Testimonal = (props: ITestimonal) => {
  const { slider, getTestimonal } = props;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    getTestimonal();
  }, [getTestimonal]);

  return (
    <>
      <div className="components-container testimonal-container">
        <div className="title">{slider.title}</div>
        {
          slider.reviews.length > 0 ?
            <>
              <div className="reviews">
                <div className="review-information">
                  <span className="review-name">{slider.reviews[index].name}</span>
                  <span className="review-position">{slider.reviews[index].position}</span>
                </div>
                <div className="comment">
                  {slider.reviews[index].comment}
                </div>
              </div>
              <div className="options-div">
                <div className="options">{`${index + 1}/${slider.reviews.length}`}</div>
                <div className="button" onClick={() => setIndex(index > 0 ? index - 1 : 0)}>{"<-"}</div>
                <div className="button" onClick={() => setIndex(index < slider.reviews.length - 1 ? index + 1 : slider.reviews.length - 1)}>{"->"}</div>
              </div></>
            : ''
        }
      </div></>
  );
};

const mapStateToProps = (state: IApp) => {
  return {
    slider: state.slider,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getTestimonal: () => {
      dispatch(getTestimonalRequest())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Testimonal);
