import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import ConvertToPrice from '../utils/ConverttoPrice'
import { AppContext } from '../ConText/AppProvider'



const ProductCard = props => {

    const { listProductCart, setListProductCart } = useContext(AppContext)

    const handleClick = () => {

        const exist = listProductCart.find((x) => x.id === props.id)

        if (exist) {
            setListProductCart(
                listProductCart.map((x) => x.id === props.id ? { ...exist, qty: exist.qty + 1 } : x)
            )

        } else {
            setListProductCart([...listProductCart, { ...props, qty: 1 }])
        }


    }

    const CutlistImg = [...props.images]
    CutlistImg.splice(2, CutlistImg.length - 2)

    return (
        <div className="product-card">
            <Link to={`/catalog/${props.slug}`}>
                <div className="product-card__image">
                    {
                        CutlistImg.map((x, i) => (
                            <img key={i} src={x} alt="" />
                        ))
                    }

                </div>
                <h3 className="product-card__name">{props.title}</h3>
                <div className="product-card__price">
                    {ConvertToPrice(props.price)}
                    <span className="product-card__price__old">
                        <del>
                            3,999,000
                        </del>


                    </span>
                </div>

            </Link>
            <div className="product-card__btn">
                <Button
                    size='sm'
                    icon='bx bx-cart'
                    animation={true}
                    onClick={handleClick}
                >
                    Chọn mua
                </Button>
            </div>
        </div>
    )
}



export default ProductCard
