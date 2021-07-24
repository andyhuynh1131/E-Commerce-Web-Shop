import React from 'react'
import Hetmet from '../components/Hetmet'
import Section, { SectionTitle, SectionBody } from '../components/Section'
import Grid from '../components/Grid'
import productData from '../assets/fake-data/products'
import ProductCard from '../components/ProductCard'

const Catalog = () => {
    return (
        <Hetmet title="Sản phẩm">
            <Section>
                <SectionTitle>
                    Sản phẩm hiện đang được bán tại Shop
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={10}
                    >
                        {
                            productData.getProducts(0, 12).map((item, index) => (
                                <ProductCard
                                    key={index}
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
        </Hetmet>
    )
}

export default Catalog
