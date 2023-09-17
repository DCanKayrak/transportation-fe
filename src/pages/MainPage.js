import React from 'react';
import Navbar from '../components/Navbar';

import g_img1 from '../assets/img/goal/1.jpg';
import g_img2 from '../assets/img/goal/2.jpg';
import g_img3 from '../assets/img/goal/3.jpg';
import g_img4 from '../assets/img/goal/4.jpg';

import p_img1 from '../assets/img/companies/aras.jpg';
import p_img2 from '../assets/img/companies/mng.jpg';
import p_img3 from '../assets/img/companies/ups.jpg';
import p_img4 from '../assets/img/companies/ptt-kargo-logo.png';
import p_img5 from '../assets/img/companies/dhl-logo.jpg';
import p_img6 from '../assets/img/companies/yurtici.png';
import a_img1 from '../assets/img/about/1.jpg';
import a_img2 from '../assets/img/about/2.jpg';
import a_img3 from '../assets/img/about/3.jpg';
import a_img4 from '../assets/img/about/4.jpg';
import { Footer } from '../components/Footer';

export const MainPage = () => {
  return (
    <div>
      <Navbar />
      <header class="masthead">
        <div class="container">
          <div class="masthead-subheading">TransGlobal'e Hoşgeldiniz</div>
          <div class="masthead-heading text-uppercase">Küresel Nakliyat Çözümleri</div>
          <a class="btn btn-primary btn-xl text-uppercase" href="/control-panel">Hemen Başla</a>
        </div>
      </header>
      <section class="page-section" id="services">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">Hizmetlerimiz</h2>
            <h3 class="section-subheading text-muted">Küresel düzeydeki taşıma çözümleri sunuyoruz</h3>
          </div>
          <div class="row text-center">
            <div class="col-md-4">
              <span class="fa-stack fa-4x circle">
                <i class="fa-solid fa-truck-fast icons"></i>
              </span>
              <h4 class="my-3">Hız</h4>
              <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x circle">
                <i class="fa-solid fa-people-carry-box icons"></i>
              </span>
              <h4 class="my-3">Özenli Taşıma</h4>
              <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x circle">
                <i class="fa-solid fa-check icons"></i>
              </span>
              <h4 class="my-3">Güvenilir</h4>
              <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="page-section bg-light" id="why">
        <div class='container'>
          <div class="text-center">
            <h2 class="section-heading text-uppercase">Neden Biz ?</h2>
            <h3 class="section-subheading text-muted">Neden bizi tercih etmelisiniz ?</h3>
          </div>
          <div class='goals'>
            <div class='row goal-row animate-section'>
              <div class='col-6'>
                <img className='img-fluid rounded' src={g_img1}></img>
              </div>
              <div className='col-6'>
                <h3 className='letter-spacing'>Küresel Çapta Teslimatlar</h3>
                <p>25 Yıllık sektör tecrübesiyle küresel kargo ihtiyaçlarınıza çözüm sunmak için geniş filomuzun gücünü ve esnekliğini kullanıyoruz. Herhangi bir coğrafyada ve her türlü lojistik zorluğu aşabilecek uzman ekibimizle birlikte, sizin için en iyi çözümü sunuyoruz.</p>
              </div>
            </div>
            <div class='row goal-row animate-section'>
              <div className='col-6'>
                <h3 className='letter-spacing'>Geniş Filomuz Hizmetinizde!</h3>
                <p>Geniş filomuz hizmetinizde! Biz, güçlü ve çeşitli bir kargo taşıma filosuna sahibiz. Müşterilerimizin her türlü kargo ihtiyacını karşılamak için tasarlanmış olan araçlarımızla donatılmış durumdayız. Küçük paketlerden büyük yüklemelere kadar her şeyi güvenle taşıyoruz. Filomuz, son teknoloji güvenlik ve izleme sistemleriyle donatılmıştır, böylece kargolarınızı titizlikle takip edebilir ve size anlık bilgi sunabiliriz. [Şirket Adı] olarak, sizin için en uygun çözümü sunmak için geniş filomuzun gücünü ve esnekliğini kullanıyoruz. Kargonuz bizimle güvende ve hizmetinizde!</p>
              </div>
              <div class='col-6'>
                <img className='img-fluid rounded' src={g_img3}></img>
              </div>
            </div>

            <div class='row goal-row animate-section'>
              <div class='col-6'>
                <img className='img-fluid rounded' src={g_img4}></img>
              </div>
              <div className='col-6'>
                <h3 className='letter-spacing'>Kargolarınız Bizimle Güvende</h3>
                <p>Kargo taşıma işi, kritik bir işlemdir ve sizin için bu konuda endişelenmenize gerek yok. Biz, her bir müşterinin kargosunu güvenilir ve güvence altında taşıma taahhüdünde bulunuyoruz.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="page-section bg-light" id="portfolio">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">Çalıştığımız Firmalar</h2>
            <h3 class="section-subheading text-muted">Taşıma işlemlerinizi üstlenen, beraber çalıştığımız</h3>
          </div>
          <div class="row">
            <div class="col-lg-4 col-sm-6 mb-4">
              <div class="portfolio-item">
                <a class="portfolio-link" href="/companies/1">
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                      <i class="fa-solid fa-dolly companies-icons"></i>
                      </div>
                  </div>
                  <img class="img-fluid companies-img" src={p_img1} alt="..." />
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-4">
              <div class="portfolio-item">
                <a class="portfolio-link" href="/companies/aras">
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                      <i class="fa-solid fa-dolly companies-icons"></i>
                    </div>
                  </div>
                  <img class="img-fluid companies-img" src={p_img2} alt="..." />
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-4">
              <div class="portfolio-item">
                <a class="portfolio-link" href="/companies/aras">
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content"><i class="fa-solid fa-dolly companies-icons"></i></div>
                  </div>
                  <img class="img-fluid companies-img" src={p_img3} alt="..." />
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
              <div class="portfolio-item">
                <a class="portfolio-link" href="/companies/aras">
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content"><i class="fa-solid fa-dolly companies-icons"></i></div>
                  </div>
                  <img class="img-fluid companies-img" src={p_img4} alt="..." />
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-4 mb-sm-0">
              <div class="portfolio-item">
                <a class="portfolio-link" href="/companies/aras">
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content"><i class="fa-solid fa-dolly companies-icons"></i></div>
                  </div>
                  <img class="img-fluid companies-img" src={p_img5} alt="..." />
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="portfolio-item">
                <a class="portfolio-link" href="/companies/aras">
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content"><i class="fa-solid fa-dolly companies-icons"></i></div>
                  </div>
                  <img class="img-fluid companies-img" src={p_img6} alt="..." />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section class="page-section" id="contact">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">Bize Ulaş</h2>
            <h3 class="section-subheading text-muted">Aklınıza Takılan sorularınız için 7/24 hizmete açığız.</h3>
          </div>
          <form id="contactForm" data-sb-form-api-token="API_TOKEN">
            <div class="row align-items-stretch mb-5">
              <div class="col-md-6">
                <div class="form-group">
                  <input class="form-control" id="name" type="text" placeholder="Adınız *" data-sb-validations="required" />
                  <div class="invalid-feedback" data-sb-feedback="name:required">Adınız boş olamaz</div>
                </div>
                <div class="form-group">
                  <input class="form-control" id="email" type="email" placeholder="Mail Adresiniz *" data-sb-validations="required,email" />
                  <div class="invalid-feedback" data-sb-feedback="email:required">Mail Adresiniz boş olamaz</div>
                  <div class="invalid-feedback" data-sb-feedback="email:email">Mail Adresiniz boş olamaz</div>
                </div>
                <div class="form-group mb-md-0">
                  <input class="form-control" id="phone" type="tel" placeholder="Telefon Numaranız *" data-sb-validations="required" />
                  <div class="invalid-feedback" data-sb-feedback="phone:required">Telefon Numaranız boş olamaz</div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group form-group-textarea mb-md-0">
                  <textarea class="form-control" id="message" placeholder="Bizlere iletmek istediğiniz mesajınız *" data-sb-validations="required"></textarea>
                  <div class="invalid-feedback" data-sb-feedback="message:required">Mesajınız boş olamaz</div>
                </div>
              </div>
            </div>
            <div class="d-none" id="submitSuccessMessage">
              <div class="text-center text-white mb-3">
                <div class="fw-bolder">Mesajınız bizlere ulaştı!</div>
                <br />
                <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
              </div>
            </div>
            <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
            <div class="text-center"><button class="btn btn-primary btn-xl text-uppercase" id="submitButton" type="submit">Mesajı gönder</button></div>
          </form>
        </div>
      </section>
      <Footer/>
    </div>
  )
}