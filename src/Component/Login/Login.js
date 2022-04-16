import React from 'react';

const Login = () => {
    return (
        <div style={{ marginTop: "200px" }} className='d-flex justify-content-center'>
            <form>
                <input type="email" name="email" id="" required /> <br />
                <input type="password" name="password" id="" required /><br />
                <input type="password" name="confirmPassword" id="" required /><br />
                <input type="submit" value="Login" /> <br />
            </form>
        </div>
    );
};

export default Login;