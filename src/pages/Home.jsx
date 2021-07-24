import React from 'react'
import Hetmet from '../components/Hetmet'
import HeroSlider from '../components/HeroSlider'
import heroSliderData from '../assets/fake-data/hero-slider'
import Section, { SectionBody, SectionTitle } from '../components/Section'
import policy from '../assets/fake-data/policy'
import PolicyCard from '../components/PolicyCard'
import Grid from '../components/Grid'
import { Link } from 'react-router-dom'
import productData from '../assets/fake-data/products'
import ProductCard from '../components/ProductCard'
import banner from '../assets/images/banner.png'


const Home = () => {
    return (
        <Hetmet title="Trang chủ">
            {/**
             * slider
             */ }
            <HeroSlider data={heroSliderData} control={true} />
            {/**
             * end slider
             */ }
            { /**
             * Start section
             */}
            <Section>
                <SectionTitle />


                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={10}>
                        {

                            policy.map((item, index) => (
                                <Link to="/policy" key={index}>
                                    <PolicyCard
                                        name={item.name}
                                        description={item.description}
                                        icon={item.icon}
                                    />
                                </Link>
                            ))
                        }

                    </Grid>

                </SectionBody>

            </Section>

            {/**
             * end section
             */}

            {/**best selling start */}
            <Section>
                <SectionTitle>
                    Top sản phẩm bán chạy trong tuần
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
            {/**best selling end  */}
            <Section>
                <SectionTitle>
                    Sản phẩm mới
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={10}
                    >
                        {
                            productData.getProducts(4, 12).map((item, index) => (
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
            {/**end New Product */}
            <Section>
                <SectionBody>
                    <Link to="/catalog">
                        <img src={banner} alt="" />
                    </Link>
                </SectionBody>

            </Section>

            {/** Pupolar */}
            <Section>
                <SectionTitle>
                    Phổ Biến
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
            {/**end Popular */}

        </Hetmet>
    )
}

export default Home
