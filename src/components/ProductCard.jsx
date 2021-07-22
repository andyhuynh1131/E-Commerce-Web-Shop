import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from './Button'
import ConvertToPrice from '../utils/ConverttoPrice'
import { AppContext } from './AppProvider'



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

    return (
        <div className="product-card">
            <Link to={`/catelog/${props.slug}`}>
                <div className="product-card__image">
                    <img src={props.image01} alt="" />
                    <img src={props.image02} alt="" />
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

ProductCard.propTypes = {

    id: PropTypes.string.isRequired,
    image01: PropTypes.string.isRequired,
    image02: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,


}

export default ProductCard
