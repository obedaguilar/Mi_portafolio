import React, { useEffect } from 'react'
import styles from './MisProyectos.module.css'
import pagoImg from '../../img/pagosrecurrentes/pagosre.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


const MisProyectos = () => {
  
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (

    <div className={styles['div-2']}>
      <h1 className={styles.h1} data-aos="fade-up">Mis Proyectos</h1>
      <div >

        <div className={styles['columnas-1']} >
          <h2 className={styles.p} data-aos="zoom-in-up">Pagos recurrentes</h2>
          <p className={styles.p} data-aos="zoom-in-up">Son pagos de una subscripción de un hosting, donde son pagos mensuales y anuales </p>
          <img src={pagoImg} alt='pago1' className={styles['img-1']} />
        </div>
        <div>
          <h2>Proyecto 2</h2>
          <p>Descripcion del proyecto 2</p>
        </div>
        <div>
          <h2>Proyecto 3</h2>
          <p>Descripcion del proyecto 3</p>
        </div>
      </div>

    </div>

  )
}

export default MisProyectos
