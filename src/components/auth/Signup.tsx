import React from 'react'

const Signup = () => {




    
    return (
        <div className='signup'>
            <form>
                <h2>Signup</h2>
                <div className='signup_content'>
                    <input type="text" placeholder='Username'/>
                    <input type="text" placeholder='Email'/>
                    <input type="password" placeholder='Password'/>
                    <button type='submit'>Signup</button>
                </div>
            </form>
        </div>
    )
}

export default Signup;
