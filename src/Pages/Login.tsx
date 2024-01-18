import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../Contexts/CustomHooks';
import { useAlert } from 'react-alert'

interface Props {
}

type login = {
    Email: string;
    Password: string | number;
}
interface Props {
    setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}
const Login = ({ setAuthenticated }: Props) => {
    const { login, Loading,
        setloading } = useAuth();
    const alert = useAlert();

    const [LoginData, SetLoginData] = useState<login>({
        Email: "",
        Password: ""
    })
    const HandleLogin = async (e) => {
        e.preventDefault();
        setloading(false)

        try {
            setloading(true)
            const response = await fetch('https://facebookapi-uuab.onrender.com/Facebook/api/v1/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Email: LoginData.Email,
                    Password: LoginData.Password
                }),
            });

            if (response.ok) {
                const data = await response.json();
                setAuthenticated(true);
                sessionStorage.setItem('authenticated', 'true');
                alert.success('Login successful!');

                login(data);
                console.log('Login Response:', data);
            } else {
                console.error('Failed to Login ');
            }
        } catch (error) {
            console.error('Error during login:', error);
        } finally {
            // This block will be executed regardless of success or failure
            (e.target as HTMLFormElement).reset();
            SetLoginData({
                Email: "",
                Password: ""
            });
            setTimeout(() => {
                setloading(false);
            },2000)
        }
    };
    return (<>
        <div className="content">
            <div className="flex-div">
                <div className="name-content">
                    <h1 className="logo">Facebook</h1>
                    <p>Connect with friends and the world around you on Facebook.</p>
                </div>
                <form onSubmit={HandleLogin}>
                    <input type="text" placeholder="Email or Phone Number" required name='Email' onChange={(e) => SetLoginData({ ...LoginData, Email: e.target.value })} />
                    <input type="password" placeholder="Password" required name='Password' onChange={(e) => SetLoginData({ ...LoginData, Password: e.target.value })} />
                    <button className="login">Log In</button>
                    <a href="#">Forgot Password ?</a>
                    <hr />
                    <button type='submit' className="create-account"><Link to="/signup">
                        Create New Account
                    </Link> </button>
                </form >
            </div>
        </div>
    </>
    )
}

export default Login
