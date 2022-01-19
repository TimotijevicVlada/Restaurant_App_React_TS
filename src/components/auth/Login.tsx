import React from 'react';

const Login = () => {




    return (
        <div className='login'>
            <form>
                <h2>Login</h2>
                <div className='login_content'>
                    <input type="text" placeholder='Email'/>
                    <input type="text" placeholder='Password'/>
                    <button type='submit'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;
