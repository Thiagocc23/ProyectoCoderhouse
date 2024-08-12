import React from 'react'
import audio from '../../assets/images/audio.webp';
import chargers from '../../assets/images/chargers.webp';
import cases from '../../assets/images/cases.webp';
import asesor from '../../assets/images/asesor.webp';
import repair from '../../assets/images/repair.webp';
import smartnew from '../../assets/images/smartnew.webp';
import { Link } from 'react-router-dom';
import '../../assets/css/animaciones.css'
import LoadingSpinner from '../../components/LoadingSpinner';

function Accesorios() {
    document.title = 'JIMP iTech - Accesorios';
    if(smartnew === undefined){
        return <section id="menu" className="py-5 text-center container">
        <div className="album bg-degrade py-5">
        <div className="container">
          <div className="">
          <LoadingSpinner />
          </div></div></div>
      </section>
    }
    return (
        <div className="slide-in-fwd-center">
        <div className="container marketing">
          <div className="row mx-auto align-middle text-center py-4">
            <div className="col-lg-4 mx-auto">
              <img src={audio} height="380" width="630" className="img-fluid mx-auto rounded-circle" alt="Audio Bose" />
              <h2>Bose JVL Sony  <p>Audio de alto nivel</p></h2>
              <p>Sumérgete en una experiencia auditiva excepcional con nuestra selección de productos de audio de alta calidad. Desde auriculares inalámbricos hasta altavoces potentes, nuestros productos de audio están diseñados para ofrecer un sonido nítido y envolvente que te permitirá disfrutar al máximo de tu música, películas y videojuegos favoritos. ¡Descubre la diferencia que un buen producto de audio puede hacer en tu vida!</p>
              <p><Link to="" className="btn btn-secondary">Más info »</Link></p>
            </div>
            <div className="col-lg-4 mx-auto">
              <img src={chargers} height="380" width="630" className="img-fluid mx-auto rounded-circle"  alt="Belkin Chargers" />
              <h2>Belkin iGotYa <p>Carga rápida & iQ</p></h2>
              <p>No permitas que la falta de energía te detenga. Con nuestros cargadores de calidad, puedes estar seguro de que tus dispositivos estarán siempre listos para funcionar. Ofrecemos una amplia gama de cargadores de alta calidad y compatibles con diferentes dispositivos, para que puedas cargar tus dispositivos de forma segura y eficiente. ¡No te quedes sin batería nunca más con nuestros cargadores confiables en las mejores marcas!</p>
              <p><Link to="" className="btn btn-secondary">Más info »</Link></p>
            </div>
            <div className="col-lg-4">
              <img src={cases} height="380" width="630" className="img-fluid mx-auto rounded-circle" alt="Cases & Protection" />
              <h2>Protección y Elegancia <p>Estuches & Vidrios</p></h2>
              <p>Mantén tu celular seguro y protegido con nuestra amplia selección de estuches y protectores. Desde estuches elegantes hasta protectores de pantalla resistentes, nuestros productos están diseñados para proteger tu celular contra daños y mantenerlo en excelentes condiciones. No importa qué modelo de celular tengas, tenemos el estuche o protector perfecto para ti. ¡Protege tu inversión con nuestros productos de calidad y disfruta de tu celular por más tiempo!</p>
              <p><Link to="" className="btn btn-secondary">Más info »</Link></p>
            </div>
          </div>
          {/* Nuestra ética */}
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">NUESTRO EQUIPO DE TRABAJO <span className="text-muted"><p>Asesorias</p></span></h2>
              <p className="lead">En nuestra tienda, no solo vendemos productos, sino que también brindamos asesoramiento experto. Nuestro equipo está formado por expertos en tecnología que estarán encantados de ayudarte a encontrar el dispositivo perfecto que se ajuste a tus necesidades y presupuesto. Además, ofrecemos asesoramiento técnico para solucionar cualquier problema que puedas tener con tus dispositivos. ¡Confía en nuestra experiencia y obtén la mejor asesoría en tecnología!</p>
            </div>
            <div className="col-md-5">
              <img src={asesor} className="img-fluid mx-auto rounded" alt="Asesor JIMP" />
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">Nuestra pasión es SOLUCIONAR<span className="text-muted"><p>Dale una segunda oportunidad</p></span></h2>
              <p className="lead">¿Tu smartphone necesita reparación? ¡No te preocupes! Ofrecemos un servicio de reparación confiable y rápido para que puedas volver a usar tu dispositivo en poco tiempo. Contamos con técnicos especializados en reparación de smartphones y utilizamos piezas de repuesto de alta calidad para garantizar que tu dispositivo funcione como nuevo. ¡Deja tu smartphone en manos de nuestro equipo experto y recupera su funcionalidad en poco tiempo!</p>
            </div>
            <div className="col-md-5 order-md-1">
              <img src={repair} className="img-fluid mx-auto rounded" alt="Técnico JIMP" />
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">Todos los medios de pago <span className="text-muted"><p>Crédito Express</p></span></h2>
              <p className="lead">¿Quieres un smartphone nuevo pero no tienes el presupuesto completo? ¡No hay problema! Ofrecemos opciones de crédito para que puedas obtener el dispositivo que deseas y pagarlo en cómodas cuotas. Nuestro proceso de crédito es fácil y rápido, con tasas de interés competitivas y opciones de pago flexibles. ¡Obtén el smartphone que deseas sin tener que gastar todo tu dinero de una sola vez!</p>
            </div>
            <div className="col-md-5">
              <img src={smartnew} className="img-fluid mx-auto rounded" alt="Crédito JIMP" />
            </div>
          </div>
          <hr className="featurette-divider" />
          {/* fin de nuestra ética */}
        </div>
      </div>
  )
}

export default Accesorios