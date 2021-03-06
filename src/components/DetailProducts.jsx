import React, { useState } from 'react'
import Button from './Button'
import { useRef, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import productData from '../assets/fake-data/products'
import ConvertToPrice from '../utils/ConverttoPrice'
import { AppContext } from '../ConText/AppProvider'

const DetailProducts = props => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const { slug } = useParams();

    const exist = productData.getProducts(0, 12).find(x => x.slug === slug)

    const lenghtImames = exist.images.length

    const imgRef = useRef(null)

    const infoRef = useRef(null)

    const { listProductCart, setListProductCart } = useContext(AppContext)

    useEffect(() => {
        imgRef.current.classList.add('active')
        infoRef.current.classList.add('active')

        window.scrollTo(0, 0)

    }, [])


    if (exist.images.length <= 0 || !Array.isArray(exist.images)) {
        return;
    }


    const handlePrevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? lenghtImames - 1 : currentSlide - 1)
    }

    const handleNextSlide = () => {
        setCurrentSlide(currentSlide === lenghtImames - 1 ? 0 : currentSlide + 1)
    }

    const handleClick = (e) => {
        const index = Number(e.target.attributes.alt.value)
        setCurrentSlide(index)

    }

    const handleAddtocart = () => {

        const rs = listProductCart.find((x) => x.id === exist.id)

        if (rs) {
            setListProductCart(
                listProductCart.map((x) => x.id === exist.id ? { ...rs, qty: rs.qty + 1 } : x)
            )

        } else {
            setListProductCart([...listProductCart, { ...exist, qty: 1 }])
        }


    }


    return (
        <div className="detail-product__item">
            <div className='detail-product__item__image' ref={imgRef} >
                <div className="detail-product__item__image_header">


                    <div className="slider-detail">
                        <i class='bx bx-left-arrow' onClick={handlePrevSlide} ></i>
                        <i class='bx bx-right-arrow' onClick={handleNextSlide}></i>
                        {
                            exist.images.map((x, i) => (
                                <SliderItem key={i} item={x} active={i === currentSlide} />
                            ))
                        }
                    </div>



                    <div className="list-images">
                        {
                            exist.images.map((x, i) => (
                                <img className={`${i === currentSlide ? 'active' : ''} `} key={i} src={x} alt={i} onClick={handleClick} />
                            ))
                        }
                    </div>
                </div>

            </div>

            <div className="detail-product__info" ref={infoRef}>
                <div className="detail-product__item__info__header">
                    <h3>{exist.title}</h3>
                    <span>Form ??o Ch??u ??u.
                        ?????nh l?????ng : 220 gsm.
                        100% cotton.
                        S???n ph???m ???????c in l???a.
                        Tag logo ???????c g???n ??? tay ??o.
                        Tem ch???ng h??ng gi??? c???a SWE ???????c may trong s?????n ??o.
                        C??c b???n vui l??ng tham kh???o b???ng size chart tr?????c khi ?????t h??ng.
                    </span>
                    <del>500,000</del>
                    <span className="price">
                        {ConvertToPrice(exist.price)}
                    </span>
                </div>
                <div className="detail-product__item__info__body">
                    <div className="title">
                        <h4>COLOR</h4>
                        <h4>SIZE</h4>
                    </div>

                    <div className="detail-product__item__info__body__color_header">
                        <div className="color">
                            {
                                exist.colors.map((x, index) => (
                                    <label className="custom-radio" key={index} style={{ backgroundColor: x }}>
                                        <input type='radio' name='color' className="btn-color" />
                                        <span className='radio-btn' ><i class='bx bx-check'></i></span>
                                    </label>

                                ))
                            }




                        </div>
                        <div className="size">
                            {
                                exist.size.map((x, index) => (
                                    <label className="custom-radio-size" key={index} >
                                        <span className='name-size'>{x}</span>
                                        <input type='radio' name='size' />
                                        <span className='radio-btn-size' ><i class='bx bx-check'></i></span>
                                    </label>

                                ))

                            }




                        </div>

                    </div>
                    <Button size={'md'}
                        icon='bx bx-cart'
                        animation={true}
                        onClick={handleAddtocart}
                    >Ch???n mua
                    </Button>
                </div>


            </div>

        </div>
    )
}

const SliderItem = (props) => {
    return (
        <img className={`img-big ${props.active ? 'active' : ''} `} src={props.item} alt="" />
    )
}

export default DetailProducts
