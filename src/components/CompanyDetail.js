import React, { useEffect, useState } from 'react';
import p_img1 from '../assets/img/companies/ptt-kargo-logo.png';
import companiesData from '../assets/companies.json';
import { useNavigate } from "react-router";

export const CompanyDetail = (props) => {
  const [company, setCompany] = useState({});
  
  const navigate = useNavigate();

  const getCompany = (companyId) => {
    const company = companiesData.find(company => company.id === Number(companyId));

    if(company == null) {
      navigate("/page-not-found")
    }

    setCompany(company);
  }

  useEffect(() => {
    getCompany(props.companyId)
  },[])

  return (
    <section className='company-details'>
      <div className='container'>
        <div className='go-back'>
          <a href='/'><i class="fa-solid fa-arrow-left f-back"></i></a>
        </div>
        <div className='company-details-header'>
          <h3>Şirketimiz Hakkında - {company.name}</h3>
          <hr></hr>
        </div>
        <div className='company-details-contents'>
          <div className='float-left'>
            <img class="img-fluid company-details-img" src={p_img1} alt="..." />
            <p className='company-details-desc'>
              1979 yılında Celal Aras tarafından kurulan Aras Dağıtım ve Pazarlama ile eriştiğimiz dağıtım ağı gücümüzü taşımacılıkta da kullanma kararı alarak 1989'da Aras Kargo'nun temellerini attık. Kuruluşumuzdan itibaren sektöre getirdiğimiz yeniliklerle hizmet kalitemizi geliştirerek Avusturya Postanesi ile 2013’te % 25 hisseyle başlayan güç birliğine, bugün Avusturya Postanesi’nin %80 çoğunluk hissesiyle devam ediyoruz. 14 bölge müdürlüğü, 28 transfer merkezi, 1000'e yakın şube, 2000 Aras Burası noktası, yaklaşık 16 bine yakın istihdam gücümüz ile günde ortalama 1 milyon kapı çalıyoruz.

              2016 yılından itibaren ise gerçekleştirdiğimiz uçtan uca teknoloji yatırımlarıyla operasyon şirketinden teknoloji şirketine dönüşerek, geleceğin kargo deneyimini tasarlama hedefi ile çalışmalarımızı sürdürüyoruz.
              <br></br>
              <br></br>
              Teknoloji yatırımlarıyla yepyeni bir kargo deneyimi yaratarak bugün, değişen tüketici beklentilerine uygun hayata geçirilen yatırımlarımızla sektörün otomasyonla iş üreten en önemli oyuncularından biri haline geldik. Aras Kargo olarak on binlerce kurumsal müşteriye hizmet veriyoruz. E-ticaret sektörünün en çok tercih ettiği ve güvendiği iş ortaklarından biri konumundayız.

              Dönüşüme öncülük eden bir şirket olarak çevreye, topluma ve ekonomiye katkı sağlamaya, Türkiye ekonomisi için katma değer üretmeye devam ediyoruz. 2021 yılında dünyanın en büyük kurumsal sürdürülebilirlik inisiyatifi olan UN Global Compact’e (Birleşmiş Milletler Küresel İlkeler Sözleşmesi) imza attık. Sürdürülebilirlik Rotası olarak adlandırdığımız yol haritasıyla rotamızı sıfır karbona çevirdik. Eylül 2022’de tüm faaliyetlerimizde bugün iyi ve değerli ne varsa, yarına taşıma hedefiyle sektörün ilk sürdürülebilirlik raporunu yayınlamanın gururunu taşıyoruz.
            </p>
          </div>
          <div className='badges'>
            <div className='badge-container'>
              <div className='single-badge'>
                <div className='c-badge'>
                  <i class="fa-solid fa-truck-fast badge-icon"></i>
                </div>
                <h5 className='mt-3 badge-title'>Toplam Yapılan Teslimat</h5>
                <h5 className='mt-3 badge-score'>1200+</h5>
              </div>

              <div className='single-badge'>
                <div className='c-badge'>
                  <i class="fa-solid fa-truck-ramp-box badge-icon"></i>
                </div>
                <h5 className='mt-3 badge-title'>Hassas Taşıma Başarı Oranı</h5>
                <h5 className='mt-3 badge-score'>99.8%</h5>
              </div>

              <div className='single-badge'>
                <div className='c-badge'>
                  <i class="fa-solid fa-users badge-icon"></i>
                </div>
                <h5 className='mt-3 badge-title'>Müşteri Memnuniyeti</h5>
                <h5 className='mt-3 badge-score'>1200+</h5>
              </div>

              <div className='single-badge'>
                <div className='c-badge'>
                  <i class="fa-solid fa-globe badge-icon"></i>
                </div>
                <h5 className='mt-3 badge-title'>Küresel Teslimat</h5>
                <h5 className='mt-3 badge-score'>20000+</h5>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
