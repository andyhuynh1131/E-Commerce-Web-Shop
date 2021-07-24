import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import firebase, { auth, db } from '../components/FireBase/Config'
import { addDocument } from '../components/FireBase/Service'
import { AuthContext } from '../ConText/AuthProvider'

const googleProvider = new firebase.auth.GoogleAuthProvider()
const Signup = () => {

    const handelGoogleSignUp = async () => {

        await auth.signInWithPopup(googleProvider)
    }

    return (
        <div className="sign-up">

            <div className="form-signup">
                <form>
                    <div className="input-div">
                        <input type='text' placeholder='Nhập số điện thoại của bạn ...' />
                        <i class='bx bxs-user'></i>
                    </div>
                    <div className="input-div">
                        <input type="password" placeholder='Nhập mật khẩu của bạn ...' />
                        <i class='bx bxs-lock-alt'></i>
                    </div>

                    <button className='sign-up-btn' type='submit'>Đăng nhập</button>
                </form>

                <div className="footer-form-login">
                    <Link to='/dang-ky'>
                        <span>Bạn chưa có tài khoản ?</span>
                    </Link>
                    <div className="sign-up-with">
                        <button className='btn-sign-up-with' type='button'><i class='bx bxl-facebook' ></i></button>
                        <button className='btn-sign-up-with' onClick={handelGoogleSignUp} type='button'><i class='bx bxl-google' ></i></button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup

