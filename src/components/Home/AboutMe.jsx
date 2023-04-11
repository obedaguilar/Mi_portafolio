import React, { useEffect } from 'react'
import styles from './AboutMe.module.css'
import styles2 from '../Projects/MisProyectos.module.css'
import { TagCloud } from "@frank-mayer/react-tag-cloud";
import AOS from 'aos';
import 'aos/dist/aos.css';


const AboutMe = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);


  return (
    <main>
      <div className={styles['div-1']}>
       

        <div>
            <h2 className={styles.h2} data-aos="fade-right">Sobre mi</h2>
            <div className={styles['div-2']}>
                <p className={styles['p']} data-aos="fade-right">
              Soy un desarrollador web, con conocimientos en el desarrollo de aplicaciones web, con experiencia en el desarrollo de aplicaciones web con tecnologias como ReactJs, Angular, NodeJs, PHP, Java, C#, SQL, MySQL, HTML, CSS, Bootstrap, entre otras.
            </p>
            <p className={styles['p']} data-aos="fade-right">
              Me gusta aprender cosas
              nuevas,
              me gusta el desarrollo web, me gusta la tecnologia, me gusta la programacion, me gusta la musica, me gusta el futbol, me gusta la lectura, me gusta la escritura, me gusta la cocina, me gusta la comida, me gusta la naturaleza, me gusta la vida, me gusta la familia, me gusta la amistad, me gusta la vida.
            </p>  
            </div>
          </div>
          
          <div>
          <TagCloud
            style={{
              fontFamily: 'sans-serif',
              fontSize: () => Math.random() * 50 + 16,
              color: 'cyan',
              padding: 40,
              maxSpeed: "fast",
              position: "static",
              margin: "auto",
              width: "100%",
              height: "100%",
        
            }}

          >
            {[
              "VSCode",
              "Javascript",
              "React",
              "ReactJs",
              "Java",
              "HTML",
              "CSS",
              "Bootstrap",
              "Csharp",
              "NodeJs",
              "Angular",
              "PHP",
              "SQL",
              "MySQL",

            ]}
          </TagCloud>
        </div>
      </div>

    </main>

  )
}

export default AboutMe