import React from 'react'
import { Link } from 'react-router-dom'

import Grid from './Grid'
import logo from '../assets/images/Logo-2.png'

const footAboutLink = [
    {
        display: "Giới Thiệu",
        path: "/"
    },
    {
        display: "Liên Hệ",
        path: "/"
    },
    {
        display: "Tuyển Dụng",
        path: "/"
    },
    {
        display: "Tin Tức",
        path: "/"
    },
    {
        display: "Hệ Thống Cửa Hàng",
        path: "/"
    },
]
const footerCustomAboutLink = [
    {
        display: "Chính sách đổi trả",
        path: "/"
    },
    {
        display: "Chính sách bảo hành",
        path: "/"
    },
    {
        display: "Chính sách hoàn tiền",
        path: "/"
    },

]
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={10}
                >
                    <div>
                        <div className="footer__title">
                            Tổng đài hổ trợ
                        </div>
                        <div className="footer__content">
                            <p>
                                Liên hệ đặt hàng <strong>0763880318</strong>
                            </p>
                            <p>
                                Thắc mắc đơn hàng <strong>0763880318</strong>
                            </p>
                            <p>
                                Góp ý <strong>0763880318</strong>
                            </p>
                        </div>
                    </div>


                    <div>
                        <div className="footer__title">
                            Về YOLO
                        </div>
                        <div className="footer__content">
                            {
                                footAboutLink.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>{item.display}</Link>
                                    </p>
                                ))
                            }

                        </div>
                    </div>

                    <div>
                        <div className="footer__title">
                            Chăm sóc khánh hàng
                        </div>
                        <div className="footer__content">
                            {
                                footerCustomAboutLink.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>{item.display}</Link>
                                    </p>
                                ))
                            }

                        </div>

                    </div>

                    <div classNam="footer__about">
                        <p>
                            <Link to="/">
                                <img src={logo} className="footer__logo" alt="" />
                            </Link>
                        </p>
                        <p>
                            Hướng đến mục tiêu mamg lại niềm vui ăn mặc mới mỗi ngày cho hàng triệu người tiêu dùng Việt.
                            Hãy cùng YOLO hướng đến một cuộc sống năng động , tích cực hơn.
                        </p>
                    </div>

                </Grid>
            </div>
        </footer>
    )
}

export default Footer
