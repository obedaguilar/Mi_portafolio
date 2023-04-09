import React from 'react'
import styles from './Home.module.css'
import HomePortrait from './HomePortrait'
import AboutMe from './AboutMe'
import MisProyectos from '../Projects/MisProyectos'
import ContactMe from '../contactme/ContactMe'

const Home = () => {
   return (
      <main>
         <HomePortrait />
         <AboutMe />
         <MisProyectos />
         <ContactMe/>
      </main>
   )
}

export default Home