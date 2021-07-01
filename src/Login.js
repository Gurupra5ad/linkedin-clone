import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import './Login.css';
import image from './linkedin-img.png'
import {auth} from './firebase'
import {login} from './features/userSlice'

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profile, setProfile] = useState("");
    const dispatch = useDispatch();

    const register = () => {
        if(!name){
            return alert("Please enter your Full Name !")
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profile,
            })
            .then(() =>{
                dispatch(login({
                    email:userAuth.email,
                    uid:userAuth.user.id,
                    displayName: name,
                    photoUrl:profile
                }));
            });
        }).catch(error => alert(error));
    };

    const loginToApp = (e) => {
        e.preventDefault();
    };

    return (
        <div className="login">
            <img src={image} alt=""/>

            <form>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name (required if registering)" />
                <input type="text" value={profile} onChange={(e) => setProfile(e.target.value)} placeholder="Profile Photo URL" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit" onClick={loginToApp} >Sign In</button>
            </form>
            <p>
                Not a member ? 
                <span className="login__register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
