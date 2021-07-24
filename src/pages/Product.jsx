import React, { useEffect, useRef } from 'react'
import DetailProducts from '../components/DetailProducts'
import Section, { SectionBody, SectionTitle } from '../components/Section'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import productData from '../assets/fake-data/products'


const Product = () => {



    const footerRef = useRef(0)

    useEffect(() => {
        footerRef.current.classList.add('active')


    }, [])

    return (
        <div className="detail-product">
            <DetailProducts />
            <div className="detail-product__row" ref={footerRef}>
                <Section>
                    <SectionTitle>
                        Có thể bạn thích
                    </SectionTitle>
                    <SectionBody>
                        <Grid
                            col={4}
                            mdCol={2}
                            smCol={1}
                            gap={10}
                        >
                            {
                                productData.getProducts(0, 4).map((item, index) => (
                                    <ProductCard
                                        key={index}
                                        id={item.id}
                                        images={item.images}
                                        title={item.title}
                                        price={item.price}
                                        slug={item.slug}

                                    />

                                ))
                            }
                        </Grid>

                    </SectionBody>
                </Section>
            </div>
        </div>
    )
}

export default Product
