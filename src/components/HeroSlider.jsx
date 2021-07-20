import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Button from './Button';



const HeroSlider = (props) => {

    const data = props.data

    const [activeSlider, setActiveSlider] = useState(0)

    const nextSlider = () => {
        const index = activeSlider + 1 === data.length ? 0 : activeSlider + 1
        setActiveSlider(index)
    }

    const preSlider = () => {
        const index = activeSlider - 1 < 0 ? data.length - 1 : activeSlider - 1
        setActiveSlider(index)
    }


    useEffect(() => {

        const interval = setInterval(() => {
            nextSlider()
        }, 5000)

        return () => {
            clearInterval(interval)
        }
    }, [activeSlider])

    return (
        <div className="hero-slider">
            {
                data.map((item, index) => (
                    <HeroSliderItem key={item, index} item={item} active={index === activeSlider} />
                ))
            }
            {
                props.control ? (
                    <div className="hero-slider__control">

                        <div className="hero-slider__control__item" onClick={preSlider}>
                            <i className="bx bx-chevron-left"></i>
                        </div>
                        <div className="hero-slider__control__item" >
                            <div className="index">
                                {activeSlider + 1} / {data.length}
                            </div>
                        </div>
                        <div className="hero-slider__control__item" onClick={nextSlider}>
                            <i className="bx bx-chevron-right"></i>
                        </div>


                    </div>
                ) : null
            }
        </div>
    );
}

const HeroSliderItem = props => {
    return (
        <div className={`hero-slider__item ${props.active ? 'active' : ''}`}>
            <div className="hero-slider__item__info">
                <div className={`hero-slider__item__info__title color-${props.item.color}`}>
                    <span>{props.item.title}</span>
                </div>
                <div className="hero-slider__item__info__description">
                    <span>{props.item.description}</span>
                </div>
                <div className="hero-slider__item__info__btn">
                    <Link to={props.item.path}>
                        <Button
                            backgroundColor={props.item.color}
                            icon="bx bx-cart"
                            animation={true}
                            size="sm"
                        >Xem chi tiết

                        </Button>
                    </Link>
                </div>
            </div>
            <div className="hero-slider__item__image">
                <div className={`shape bg-${props.item.color}`}></div>
                <img src={props.item.img} alt="" />
            </div>
        </div>
    )
}

HeroSlider.propTypes = {
    data: PropTypes.array.isRequired,
    control: PropTypes.bool
};

export default HeroSlider;