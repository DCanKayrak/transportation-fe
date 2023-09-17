import React from 'react';
import { useState } from 'react';
import { PostWithoutAuth } from '../service/HttpService';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const [email, setEmail] = useState("");
    const [testEmail, setTestEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleEmail = (value) => {
        console.log(value);
        setEmail(value);
    }

    const handlePassword = (value) => {
        setPassword(value)
    }

    function parseJwt (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
    }


    const sendRequest = (path) => {
        PostWithoutAuth((path), {
            email : email, 
            password : password
          })
          .then((res) => res.json())
          .then((result) => {
            console.log("request");
            handleJwt(result.accessToken.token);
          })
          .catch((err) => alert(err))
    }
    const handleJwt = (token) => {
        const userEmail = parseJwt(token).email;
        localStorage.setItem('token',token);
        localStorage.setItem('userEmail',userEmail);
        alert('Başarıyla Giriş Yaptınız!');
    }

    const handleLogin = () => {
        sendRequest("/api/Auth/Login")
        navigate("/control-panel/order-request")
    }

    return (
        <div>
            <div className='login-container'>
                <div className='login-left'>
                    <div className='form-container'>
                        <div className='go-back'>
                            <a href='/'><i class="fa-solid fa-arrow-left f-back"></i></a>
                        </div>
                        <div className='login-header'>
                            <h3>GİRİŞ YAP</h3>
                            <hr></hr>
                        </div>
                        <form>
                        <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Mail Adresiniz</label>
                                <input type="email" onChange = {(i) => handleEmail(i.target.value)} class="form-control" id="email" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text">Mail adresinizi kimseyle paylaşmayacağız.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Şifreniz</label>
                                <input type="password" onChange = {(i) => handlePassword(i.target.value)} class="form-control" id="password"/>
                            </div>
                            <button type='submit' onClick={() => handleLogin()} class="btn btn-primary">Giriş Yap</button>
                        </form>
                        <a href='/register'>Zaten bir hesabınız mı var ?</a>
                    </div>
                </div>
                <div className='login-right'>
                </div>
                <div className='btn-close-sidebar'></div>
            </div>
        </div>
    )
}
