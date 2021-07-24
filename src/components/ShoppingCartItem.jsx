import React from 'react'
import ConvertToPrice from '../utils/ConverttoPrice'
import { useContext } from 'react'
import { AppContext } from '../ConText/AppProvider'
import PropTypes from 'prop-types'








function ShoppingCartItem(props) {
    const { listProductCart, setListProductCart } = useContext(AppContext)

    window.scrollTo(0, 0)

    const handleChange = (e) => {
        const value = Number(e.target.value)

        console.log(value);
        const exist = listProductCart.find(x => x.id === props.id)
        if (value > 0) {
            if (exist) {
                setListProductCart(
                    listProductCart.map(x => x.id === props.id ? { ...exist, qty: value } : x)
                )
            } else {
                return;
            }
        } else {
            return;
        }





    }

    const handleClickPlus = () => {
        const exist = listProductCart.find(x => x.id === props.id)
        if (exist) {
            setListProductCart(
                listProductCart.map(x => x.id === props.id ? { ...exist, qty: exist.qty + 1 } : x)
            )
        } else {
            return;
        }

    }

    const handleClickMinus = () => {
        const exist = listProductCart.find(x => x.id === props.id)
        const index = listProductCart.findIndex(x => x.id === props.id)
        if (exist.qty > 1) {
            if (exist) {
                setListProductCart(
                    listProductCart.map(x => x.id === props.id ? { ...exist, qty: exist.qty - 1 } : x)
                )
            } else {
                return;
            }
        } else {
            const newList = [...listProductCart]
            newList.splice(index, 1)
            setListProductCart(

                newList
            )
        }



    }


    const newlistImg = [...props.images]




    return (
        <div className="shopping-card__item">
            <div style={{ display: 'flex', flexGrow: 1, justifyContent: 'space-around' }}>
                <div className="shopping-card__item__product">
                    <div className="shopping-card__image">
                        {
                            newlistImg.map((x, i) => (
                                <img key={i} src={x} alt="" />
                            )

                            )
                        }


                    </div>

                    <h3 className="shopping-card-title">{props.title}</h3>
                </div>


                <div className="shopping-card-price">
                    {ConvertToPrice(props.price)}

                </div>
                <div className="shopping-card-number">
                    <i class='bx bxs-minus-square' onClick={handleClickMinus} ></i>
                    <input type='text' value={props.qty} onChange={handleChange} style={{ width: '25%', textAlign: 'center' }} />
                    <i class='bx bxs-plus-square' onClick={handleClickPlus} ></i>
                </div>

                <div className="shopping-card-total" >
                    <span>{ConvertToPrice(props.price * props.qty)}</span>

                </div>

            </div>

        </div>
    )
}

ShoppingCartItem.propTypes = {

    id: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    qty: PropTypes.number.isRequired


}


export default ShoppingCartItem

