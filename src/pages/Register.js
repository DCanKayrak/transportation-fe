import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostWithoutAuth } from '../service/HttpService';

export const Register = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const handleFirstName = (value) => {
        setFirstName(value)
    }

    const handleLastName = (value) => {
        setLastName(value)
    }

    const handleEmail = (value) => {
        setEmail(value)
    } 

    const handlePassword = (value) => {
        setPassword(value)
    }

    const sendRequest = (path) => {
        PostWithoutAuth((path), {
            email : email, 
            password : password,
            firstName : firstName,
            lastName : lastName
          })
          .then((res) => res.json())
          .then((result) => {console.log(result)})
          .catch((err) => console.log(err))
    }

    const handleRegister = () => {
        sendRequest("/api/Auth/Register")
        alert("Kaydınız başarıyla tamamlandı! Giriş Yapabilirsiniz")
        navigate("/login")
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
                            <h3>KAYIT OL</h3>
                            <hr></hr>
                        </div>
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Adınız</label>
                                <input type="text" onChange = {(i) => handleFirstName(i.target.value)} class="form-control" id="firstName" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Soyadınız</label>
                                <input type="text" onChange = {(i) => handleLastName(i.target.value)} class="form-control" id="lastName" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Mail Adresiniz</label>
                                <input type="email" onChange = {(i) => handleEmail(i.target.value)} class="form-control" id="email" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text">Mail adresinizi kimseyle paylaşmayacağız.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Şifreniz</label>
                                <input type="password" onChange = {(i) => handlePassword(i.target.value)} class="form-control" id="password" />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Okudum, kabul ediyorum</label>
                            </div>
                            <button type="submit" class="btn btn-primary" onClick={() => handleRegister()}>Kayıt ol</button>
                        </form>
                        <a href='/login'>Zaten bir hesabınız mı var ?</a>
                    </div>
                </div>
                <div className='login-right'>
                </div>
                <div className='btn-close-sidebar'></div>
            </div>
        </div>
    )
}
