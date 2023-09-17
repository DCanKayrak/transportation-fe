import React from 'react'

export const Register = () => {
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
                                <label for="exampleInputEmail1" class="form-label">Mail Adresiniz</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    <div id="emailHelp" class="form-text">Mail adresinizi kimseyle paylaşmayacağız.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Şifreniz</label>
                                <input type="password" class="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label" for="exampleCheck1">Okudum, kabul ediyorum</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Kayıt ol</button>
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
