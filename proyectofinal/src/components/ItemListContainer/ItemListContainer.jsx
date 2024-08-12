import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList.jsx';
import { useParams } from 'react-router-dom';
import { getAllItems as getProductos, getItemsByCategory} from '../../services/FireStore.js';
import LoadingSpinner from '../LoadingSpinner/';
import { Container, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function ItemListContainer( {greeting, items} ) {
    const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState([]);
    const { category } = useParams();
   
    useEffect(() => {
        if (category === undefined) {
     document.title = 'JIMP iTech! Catálogo';       
    getProductos().then(respuestaPromise => {
        setProductos(respuestaPromise);
        setLoading(false);
    }); } else {
        document.title = `JIMP iTech! ${category}`;
    getItemsByCategory(category).then(respuestaPromise => {
        setProductos(respuestaPromise);
        setLoading(false);
    }); }   
    }, [category]);
    
   function setCatPath(){
    if (category) {
        return <Container className="d-flex text-center justify-content-center mb-10 pb-10 align-items-center p-5"><Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>catálogo</Breadcrumb.Item><Breadcrumb.Item active>{category}</Breadcrumb.Item></Container>;
    }   else {
        return <Container className="d-flex text-center justify-content-center mb-10 pb-10 align-items-center p-5"><Breadcrumb.Item active>catálogo</Breadcrumb.Item></Container>;
    }
}


if(loading){
  return <section id="menu" className="py-5 text-center container">
        
  <div className="album bg-degrade py-5">
  <div className="container">
    <div className="">
    <LoadingSpinner />
    </div></div></div>
</section>
  
  
}
return (
        <section id="menu" className="text-center container slide-in-fwd-center">
   <Container className="d-flex text-center justify-content-center mb-10 pb-10 align-items-center"><Breadcrumb>
   
{setCatPath()}
    </Breadcrumb></Container> 
        <div className="album">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3 g-3">
          <ItemList items={productos} />
          </div></div></div>
           
      </section>
      
      
        );
    }
    
    export default ItemListContainer;