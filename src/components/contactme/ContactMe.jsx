import React from 'react'
import styles from '../Projects/MisProyectos.module.css'
import { GoogleMap, LoadScript } from '@react-google-maps/api';


const containerStyle = {
    width: '400px',
    height: '400px',
    borderRadius: '20px'
};

const center = {
    lat: 19.065338,
    lng: -98.200043,

};

const ContactMe = () => {

    return (
        <div>
            <div className={styles['columnas-2']}>
                <div>
                    <h2 className={styles['h2']}>Contactame</h2>
                    <p>Si quieres contactarme, puedes hacerlo a traves de mis redes sociales</p>
                    <form >
                        <div>
                            <label htmlFor="name">
                                Nombre:
                            </label>
                        </div>
                        <div>
                            <input type="text" name="name" id="name" />
                        </div>

                        <div>
                            <label htmlFor="email">
                                Correo:
                            </label>
                        </div>
                        <div>
                            <input type="text" name="email" id="email" /></div>
                        <div>
                            <label htmlFor="message">
                                Mensaje:</label>
                        </div>
                        <div>
                            <input type="text" name="message" id="message" />
                        </div>
                        <div>
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
                <div>
                    <LoadScript googleMapsApiKey='AIzaSyBQKmwIWd8iU93SrNaKvKJ8IhSwvfybpPs'>
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={10}
                        >
                        </GoogleMap>
                    </LoadScript>

                    <p>
                        Soy originario de Puebla
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ContactMe
