import React from 'react'


export default function Navbar () {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand" href="#page-top"><i style={{color: 'white', marginright : 0.5 + 'rem'}} class="fa-solid fa-earth-europe"></i> TransGlobal</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars ms-1"></i>
                </button>
                <div class="collapse navbar-collapse soft" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li class="nav-item"><a class="nav-link" href="#services">Hizmetlerimiz</a></li>
                        <li class="nav-item"><a class="nav-link" href="#why">Neden Biz ?</a></li>
                        <li class="nav-item"><a class="nav-link" href="#portfolio">Şirketlerimiz</a></li>
                        <li class="nav-item"><a class="nav-link" href="#contact">İletişim</a></li>
                        <li class="nav-item"><a class="nav-link" href="/login">Giriş Yap</a></li>
                    </ul>
                </div>
            </div>
        </nav>
  )
}
