import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import mapMarkerImg  from '../images/map-marker.svg';
import '../styles/pages/orphanages-map.css';
import 'leaflet/dist/leaflet.css';

const OrphanagesMap = () => {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>São Paulo</strong>
          <span>São Paulo</span>
        </footer>
      </aside>
      
      <Map 
        center={[-23.4848256,-46.6223104]} 
        zoom={13} 
        style={{ width: '100%', height: '100%' }} /* 1ª {} para indicar que é um código js e a 2ª para indicar o objeto no qual escrevo o css dentro da propriedade */
      >
        <TileLayer 
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
        />
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />     Outra opção de mapa*/}
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;