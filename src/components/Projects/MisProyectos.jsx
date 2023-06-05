import React, { useEffect, useState } from 'react'
import styles from './MisProyectos.module.css'
import pagoImg from '../../img/pagosrecurrentes/pagosre.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


const MisProyectos = () => {

  const [projects, setProjects] = useState();

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    const getProjects = async () => {

      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      const response = await fetch('http://localhost:8080/all/projects', requestOptions);
      const result = await response.json();
      console.log(result?.data);
      setProjects(result.data);

    }
    getProjects();
    // AOS.refresh();
  }, []);

  return (

    <div className={styles['div-2']}>
      <h1 className={styles.h1} data-aos="fade-up">Mis Proyectos</h1>
      {
        projects ? projects.map((project, index) => (
          <div key={index}>
            <div className={styles['columnas-1']} >
              <h2 className={styles.p} data-aos="zoom-in-up">{project.nombre}</h2>
              <p className={styles.p} data-aos="zoom-in-up">{project.descripcion}</p>
              <img src={project.imagen} alt='pago1' className={styles['img-1']} />
            </div>
          </div>
        )) : (<div>Cargando...</div>
        )
      }
      <div>
      </div>
    </div>

  )
}

export default MisProyectos
