import React from 'react'
import './Contacto.css';
import '../../assets/css/animaciones.css'

function Contacto() {
    document.title = 'JIMP iTech - Contacto';
  return (
    <section className="slide-in-fwd-center">
  {/* Formulario de contacto - no funcional basado en https://www.freecontactform.com/form-guides/html-email-form*/}
  <div className="container  mt-5 mb-5 ">
    <div className="row m-0">
      <div className="col-md-3 bg-custom p-0 d-flex text-center  mx-auto justify-content-center flex-column">
        <h3 className="mb-2 text-white">Info</h3>
        <div className="info text-light .fs-6">
          Carrera 5ta con 16 Cali
          <p>info@jimpitech.com</p>
          3154785236
          <div className="social-icons">
          </div>
        </div>
      </div>
      <div className="col-md-8 p-0 bg-custom2 pt-4 pb-4">
        {/* <h3 className="pl-4" /> */}
        <form className="w-100 p-4" action="#">
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nombre" required />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="Email" required />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlInput2" placeholder="Mensaje" required rows={3} defaultValue={""} />
              </div>
            </div>
          </div>
          <button type="button" className="btn btn-custom btn-lg btn-block mt-3">Enviar</button>
        </form>
      </div>
    </div>
  </div>
</section>
  )
}

export default Contacto