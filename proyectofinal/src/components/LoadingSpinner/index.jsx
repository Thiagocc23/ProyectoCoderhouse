import React from 'react';
import { Container } from 'react-bootstrap';
import logojimp from '../../assets/images/logo-jimp.png';

function LoadingSpinner() {
  return (
    <Container><img src={logojimp} height="380" width="480" alt="logojimp" className="img-fluid" />
      <div class="spinner-grow text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>

    </Container>
  )
}

export default LoadingSpinner