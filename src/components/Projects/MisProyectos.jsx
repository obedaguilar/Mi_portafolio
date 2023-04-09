import React from 'react'
import styles from './MisProyectos.module.css'
import pagoImg from '../../img/pagosrecurrentes/pagos1.png'


const MisProyectos = () => {
  return (
    <div>
      <div>
        <h1>Mis Proyectos</h1>
        <p>Estos son algunos de mis proyectos</p>
        <div className={styles['columnas-1']}>
            <div>
                <h2>Proyecto 1</h2>
                <p>Descripcion del proyecto 1</p>
                  <img src={pagoImg} alt='pago1' className={styles['img-1']}/>
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
    </div>
  )
}

export default MisProyectos
