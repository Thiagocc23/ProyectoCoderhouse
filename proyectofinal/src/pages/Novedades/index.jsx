import React from 'react';
import { Link } from 'react-router-dom'; 
import servicioscta1 from '../../assets/images/servicios1.jpg';
import servicioscta2 from '../../assets/images/servicioscta2.webp';
import '../../assets/css/animaciones.css'
import LoadingSpinner from '../../components/LoadingSpinner'

function Servicios() {
    document.title = 'JIMP iTech - Servicios';
    if(servicioscta2 === undefined){
        return <section id="menu" className="py-5 text-center container">
        <div className="album bg-degrade py-5">
        <div className="container">
          <div className="">
          <LoadingSpinner />
          </div></div></div>
      </section>
    }
  return (
    <section className="slide-in-fwd-center">
  <section>
    <article>
      {/* Para mobile */}
      <div className="px-4 py-2 my-5 text-center d-lg-none d-xl-none">
        <img className="d-block mx-auto img-fluid mb-4 rounded" src={servicioscta1} alt="Renueva" />
        <h1 className="display-5 fw-bold">¡Renueva tu Smartphone!</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">¡Es hora de renovar tu smartphone y darle a tu vida tecnológica un nuevo impulso! Descubre nuestra amplia selección de smartphones de última generación y encuentra el dispositivo perfecto que se adapte a tus necesidades y estilo de vida. ¡No esperes más para actualizar tu tecnología y estar siempre conectado!</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <a href='https://wa.link/54tfd1'><button type="button" className="btn btn-primary btn-lg px-4 gap-3">Más info</button></a>
            <Link to="/contacto"><button type="button" className="btn btn-outline-secondary btn-lg px-4">Contratar</button></Link>
          </div>
        </div>
      </div>
      {/* Para desktops */}
      <div className="container col-xxl-8 px-4 py-2 d-none d-lg-block">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={servicioscta1} className="d-block mx-lg-auto img-fluid rounded" alt="Servicios" width={700} height={500} loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">¡Renueva tu Smartphone!</h1>
            <p className="lead">¡Es hora de renovar tu smartphone y darle a tu vida tecnológica un nuevo impulso! Descubre nuestra amplia selección de smartphones de última generación y encuentra el dispositivo perfecto que se adapte a tus necesidades y estilo de vida. ¡No esperes más para actualizar tu tecnología y estar siempre conectado!</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <a href='https://wa.link/54tfd1'><button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Más info</button></a>
              <Link to="/contacto"><button type="button" className="btn btn-outline-secondary btn-lg px-4">Contratar</button></Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section> <section>
    <article>
      {/* Para mobile */}
      <div className="px-4 py-2 my-5 text-center d-lg-none d-xl-none">
        <img className="d-block mx-auto img-fluid mb-4 rounded" src={servicioscta2} alt="nuestrosservicios" />
        <h1 className="display-5 fw-bold">¡Servicio de envíos!</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">¡Te llevamos la tecnología directamente a tu hogar! Ofrecemos envíos y domicilios rápidos y confiables para que puedas disfrutar de tus productos tecnológicos sin tener que salir de casa. ¡Haz tu pedido ahora y recíbelo en la comodidad de tu hogar!
</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <a href='https://wa.link/54tfd1'><button type="button" className="btn btn-primary btn-lg px-4 gap-3">Más info</button></a>
            <Link to="/contacto"><button type="button" className="btn btn-outline-secondary btn-lg px-4">Contratar</button></Link>
          </div>
        </div>
      </div>
      {/* Desktops */}
      <div className="container col-xxl-8 px-4 py-2 d-none d-lg-block">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={servicioscta2} className="d-block mx-lg-auto img-fluid rounded" alt="Pedí Online" width={700} height={500} loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">¡Servicio de envíos!</h1>
            <p className="lead">¡Te llevamos la tecnología directamente a tu hogar! Ofrecemos envíos y domicilios rápidos y confiables para que puedas disfrutar de tus productos tecnológicos sin tener que salir de casa. ¡Haz tu pedido ahora y recíbelo en la comodidad de tu hogar!
</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <a href='https://wa.link/54tfd1'><button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Más info</button></a>
              <Link to="/contacto"><button type="button" className="btn btn-outline-secondary btn-lg px-4">Contratar</button></Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</section>
  )
}

export default Servicios