import React, { useEffect } from 'react'
import styles from './AboutMe.module.css'
import { TagCloud } from "@frank-mayer/react-tag-cloud";

const AboutMe = () => {



  return (
    <main>
      <div className={styles['body']}>
        <div className='text-center'>
          <TagCloud
            style={{
              fontFamily: 'sans-serif',
              fontSize: () => Math.random() * 50 + 16,
              color: 'yellow',
              padding: 5,
              maxSpeed: "fast",
              position: "static",
              margin: "0 auto",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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