import React, { useEffect, useState } from 'react'
import styles from './MisProyectos.module.css'
import pagoImg from '../../img/pagosrecurrentes/pagosre.png'
import calcuImg from '../../img/calcu/calcu.png'
import qrImg from '../../img/codigosqr/qr.png'
import rickImg from '../../img/rickmorty/rick.png'
import mortyImg from '../../img/rickmorty/morty.png'
import crudImg from '../../img/crud/crud1.png'
import crud2Img from '../../img/crud/crud2.png'

import AOS from 'aos';
import 'aos/dist/aos.css';


const MisProyectos = () => {

  const [projects, setProjects] = useState();

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  // useEffect(() => {
  //   const getProjects = async () => {

  //     var requestOptions = {
  //       method: 'GET',
  //       redirect: 'follow'
  //     };
  //     const response = await fetch('http://localhost:8080/all/projects', requestOptions);
  //     const result = await response.json();
  //     console.log(result?.data);
  //     setProjects(result.data);

  //   }
  //   getProjects();
  //   // AOS.refresh();
  // }, []);

  return (

    <>
      <div className={styles['div-2']}>
        <h1 className={styles.h1} data-aos="fade-up">Mis Proyectos</h1>
        <div className={styles['columnas-1']} >
          <h2 className={styles.p} data-aos="zoom-in-up">Calculadora</h2>
          <p className={styles.p} data-aos="zoom-in-up">Esta calculadora fue hecha con reactjs</p>
          <img src={calcuImg} alt='pago1' className={styles['img-2']} />
          <a href="https://calculadoraobed.netlify.app/" target="_blank" rel="noreferrer" className={styles.a} data-aos="zoom-in-up">Ver proyecto</a>
        </div>
      </div>

      <div className={styles['div-2']}>
        <div className={styles['columnas-1']} >
          <h2 className={styles.p} data-aos="zoom-in-up">App Movil Rick y Morty</h2>
          <p className={styles.p} data-aos="zoom-in-up">Este proyecto son textos o páginas web que se transforman en QR hecho en react JS</p>
          <img src={mortyImg} alt='pago1' className={styles['img-2']} />
          <img src={rickImg} alt='pago1' className={styles['img-2']} />
          <a href="https://plus--tangerine-sprinkles-8ccf16.netlify.app/" target="_blank" rel="noreferrer" className={styles.a} data-aos="zoom-in-up">Ver proyecto</a>
        </div>
      </div>

      <div className={styles['div-2']}>
        <div className={styles['columnas-1']} >
          <h2 className={styles.p} data-aos="zoom-in-up">Codigos QR</h2>
          <p className={styles.p} data-aos="zoom-in-up">Este proyecto son textos o páginas web que se transforman en QR hecho en react JS</p>
          <img src={qrImg} alt='pago1' className={styles['img-1']} />
          {/* <a href="https://calculadoraobed.netlify.app/" target="_blank" rel="noreferrer" className={styles.a} data-aos="zoom-in-up">Ver proyecto</a> */}
          <p className='text-red-500'>Por versiones anteriores en desuso no se compila en netlify</p>
        </div>
      </div>

      
      <div className={styles['div-2']}>
        <div className={styles['columnas-1']} >
          <h2 className={styles.p} data-aos="zoom-in-up">CRUD notas</h2>
          <p className={styles.p} data-aos="zoom-in-up">Este proyecto se realizó un CRUD desarrollado en php consumiendo REST api, usando SQL server como base de datos</p>
          <img src={crudImg} alt='pago1' className={styles['img-1']} />
          <div className={styles['columnas-1']}></div>
          <img src={crud2Img} alt='pago1' className={styles['img-1']} />
          {/* <a href="https://calculadoraobed.netlify.app/" target="_blank" rel="noreferrer" className={styles.a} data-aos="zoom-in-up">Ver proyecto</a> */}
          <p className='text-red-500'>Proximamente para ver</p>
        </div>
      </div>



      <div className={styles['div-2']}>
        <div className={styles['columnas-1']} >
          <h2 className={styles.p} data-aos="zoom-in-up">Pagos Recurrentes</h2>
          <p className={styles.p} data-aos="zoom-in-up">Pagos Recurrentes es una aplicación web que permite a los usuarios realizar pagos recurrentes de manera automática, sin necesidad de estar pendiente de la fecha de pago, ya que la aplicación se encarga de realizar el pago de manera automática.
            Hecha con REACT JS y laravel lumen consumiendo apis para stripe</p>
          <img src={pagoImg} alt='pago1' className={styles['img-1']} />
            <a href="https://plus--spontaneous-lolly-5d1eaa.netlify.app/" target="_blank" rel="noreferrer" className={styles.a} data-aos="zoom-in-up">Ver proyecto</a>
        </div>
      </div>

    </>




    // <div className={styles['div-2']}>
    //   <h1 className={styles.h1} data-aos="fade-up">Mis Proyectos</h1>
    //   {
    //     projects ? projects.map((project, index) => (
    //       <div key={index}>
    //         <div className={styles['columnas-1']} >
    //           <h2 className={styles.p} data-aos="zoom-in-up">{project.nombre}</h2>
    //           <p className={styles.p} data-aos="zoom-in-up">{project.descripcion}</p>
    //           <img src={project.imagen} alt='pago1' className={styles['img-1']} />
    //         </div>
    //       </div>
    //     )) : (<div>Cargando...</div>
    //     )
    //   }
    //   <div>
    //   </div>
    // </div>

  )
}

export default MisProyectos
