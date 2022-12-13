import "./index.scss";
import AnimatedLetters from "../AnitmatedLetters";

import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

function Contact() {
  const position = [-34.6778199, 150.8533326];

  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });

  return (
    <>
      <div className='contact-page'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h1>
                <AnimatedLetters stringArray={"Contact".split("")} startIndex={1} />
              </h1>
              <div className='contact-form'>
                <form action='' id='send-halp'>
                  <div className='form-group'>
                    <input type='text' name='name' placeholder='Name' />
                    <input type='email' name='email' placeholder='Email' />
                  </div>
                  <div className='form-group'>
                    <textarea
                      name='message'
                      form='send-halp'
                      rows='1'
                      placeholder="Hey there, don't hesitate to reach out!"
                    ></textarea>
                  </div>
                  <div className='form-row'>
                    <input type='submit' className='form-submit' />
                  </div>
                </form>
              </div>
            </div>
            <div className='col'>
              <div className='map-info'>
                <p>
                  Working remotely,
                  <br />
                  based in Sydney
                  <br />
                  NSW, Australia.
                  <br />
                  <span>classy@dev.com</span>
                </p>
              </div>
              <div className='map-wrapper'>
                <MapContainer center={position} zoom={11}>
                  <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                  <Marker position={position} icon={DefaultIcon}>
                    <Popup>It all starts with a line of JavaScript.</Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
