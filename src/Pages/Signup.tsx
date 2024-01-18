import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAlert } from 'react-alert';
interface Props {

}
type Signup = {
    Name: string;
    Email: string;
    DOB: Date | string;
    Password: string | Number;
}

const Signup = (props: Props) => {
    const [SignUpData, SetSignUpData] = useState<Signup>({
        Name: "",
        Email: "",
        DOB: "",
        Password: ""
    })
    const alert = useAlert();
    const naviagate = useNavigate();
    const HandleSignUp = async (e) => {
        e.preventDefault();
        const response = await fetch('https://facebookapi-uuab.onrender.com/Facebook/api/v1/user/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            Name: SignUpData.Name,
        Email: SignUpData.Email,
        DOB: SignUpData.DOB,
        Password: SignUpData.Password
          }),
        });
      
        if (response.ok) {
          const data = await response.json();
          alert.success("Successfully Created      ")
          console.log('Signup Response:', data);
          naviagate("/login")
        } else {
          console.error('Failed to sign up');
        }
      
        // Reset the form
        (e.target as HTMLFormElement).reset();
        SetSignUpData({
          Name: '',
          Email: '',
          DOB: '',
          Password: '',
        });
      };
      
    return (
        <div className="content">
            <div className="flex-div">
                <div className="name-content">
                    <h1 className="logo">Facebook</h1>
                    <p>Connect with friends and the world around you on Facebook.</p>
                </div>
                <form onSubmit={HandleSignUp} method='POST' action='/'>
                    <input type="text" placeholder="Name" required name='Name' onChange={(e) => SetSignUpData({ ...SignUpData, Name: e.target.value })} />
                    <input type="text" placeholder="Email or Phone Number" required name='Email' onChange={(e) => SetSignUpData({ ...SignUpData, Email: e.target.value })} />
                    <input type="date" placeholder="D-O-B" required name='DOB' onChange={(e) => SetSignUpData({ ...SignUpData, DOB: e.target.value })} />
                    <input type="password" placeholder="Password" required name='Password' onChange={(e) => SetSignUpData({ ...SignUpData, Password: e.target.value })} />
                    <button className="login" type='submit'>Sign Up</button>
                    <a href="#">Find Your Account ?</a>
                    <hr />
                    <button className="create-account"><Link to={'/login'}>Already Have Account ?</Link></button>
                </form>
            </div>
        </div>
    )
}

export default Signup
