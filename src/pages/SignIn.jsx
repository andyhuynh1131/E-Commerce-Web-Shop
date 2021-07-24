import React from 'react'
import PropTypes from 'prop-types'

const SignIn = props => {



    return (
        <div className="sign-up">

            <div className="form-signup">
                <form>
                    <div className="input-div">
                        <input type='text' placeholder='Nhập số điện thoại của bạn ...' />
                        <i class='bx bxs-user'></i>
                    </div>


                    <button className='sign-up-btn' type='submit'>Đăng ký</button>
                </form>


            </div>
        </div>
    )
}

SignIn.propTypes = {

}

export default SignIn
