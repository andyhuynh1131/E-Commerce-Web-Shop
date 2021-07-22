import React, { useContext } from 'react'
import Hetmet from '../components/Hetmet'
import ShoppingCartItem from '../components/ShoppingCartItem'
import { AppContext } from '../components/AppProvider'
import Button from '../components/Button'



const Cart = () => {

    const { listProductCart } = useContext(AppContext)

    const totalPrice = listProductCart.reduce((acc, curr) => acc + curr.price * curr.qty, 0)

    const totalProducts = listProductCart.reduce((acc, curr) => acc + curr.qty, 0)

    console.log(listProductCart);
    return (
        <Hetmet title="Giỏ hàng">

            <div className="shopping-cart">
                <div className="shopping-cart__header">
                    <h3 className="title-image"> Sản phẩm </h3>
                    <h3 style={{ width: '15%' }}> Giá </h3>
                    <h3 style={{ width: '20%' }}>Số lượng </h3>
                    <h3 style={{ width: '20%' }}> Tổng </h3>

                </div>

                <div >
                    {
                        listProductCart.map((item, index) => (
                            <ShoppingCartItem
                                key={index}
                                id={item.id}
                                image01={item.image01}
                                image02={item.image02}
                                title={item.title}
                                price={item.price}
                                slug={item.slug}
                                size={item.size}
                                colors={item.colors}
                                categorySlug={item.categorySlug}
                                qty={item.qty}


                            />
                        ))
                    }
                </div>
                <div className="shopping-cart__footer">
                    <div style={{ width: '35%' }}></div>
                    <span style={{ width: '25%', textAlign: 'center', margin: 'auto' }}>Tổng số lượng</span>
                    <span style={{ width: '20%', textAlign: 'center', margin: 'auto' }}>{totalProducts}</span>
                    <h3 style={{ width: '20%', textAlign: 'center', margin: 'auto' }}>{totalPrice}</h3>

                </div>
                <div style={{ textAlign: 'right', padding: '50px' }}>
                    <Button
                        backgroundColor={'blue'}
                        size={'md'}
                        icon={'bx bx-check'}
                        animation={true}

                    >
                        Thanh Toán
                    </Button>
                </div>


            </div>


        </Hetmet>
    )
}

export default Cart
