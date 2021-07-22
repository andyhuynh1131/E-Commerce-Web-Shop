import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ConvertToPrice from '../utils/ConverttoPrice'
import { useContext } from 'react'
import { AppContext } from './AppProvider'




ShoppingCartItem.propTypes = {

    id: PropTypes.number.isRequired,
    image01: PropTypes.string.isRequired,
    image02: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    size: PropTypes.array.isRequired,
    colors: PropTypes.array.isRequired,
    categorySlug: PropTypes.string.isRequired,
    qty: PropTypes.number.isRequired


}




function ShoppingCartItem(props) {
    const { listProductCart, setListProductCart } = useContext(AppContext)






    const handleChange = (e) => {




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






    return (
        <div className="shopping-card__item">
            <div style={{ display: 'flex', flexGrow: 1, justifyContent: 'space-around' }}>
                <div className="shopping-card__item__product">
                    <div className="shopping-card__image">
                        <img src={props.image01} alt="" />
                        <img src={props.image02} alt="" />
                    </div>

                    <h3 className="shopping-card-title">{props.title}</h3>
                </div>


                <div className="shopping-card-price">
                    {ConvertToPrice(props.price)}

                </div>
                <div className="shopping-card-number">
                    <i class='bx bxs-minus-square' onClick={handleClickMinus} ></i>
                    <input type='text' value={props.qty} style={{ width: '15%', textAlign: 'center' }} />
                    <i class='bx bxs-plus-square' onClick={handleClickPlus} ></i>
                </div>

                <div className="shopping-card-total" >
                    <span>{ConvertToPrice(props.price * props.qty)}</span>

                </div>

            </div>

        </div>
    )
}



export default ShoppingCartItem

