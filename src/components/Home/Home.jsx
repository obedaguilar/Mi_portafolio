import React from 'react'
import styles from './Home.module.css'
import HomePortrait from './HomePortrait'
import AboutMe from './AboutMe'
import MisProyectos from '../Projects/MisProyectos'
import ContactMe from '../contactme/ContactMe'
import Footer from './Footer/Myfooter'

const Home = () => {
   return (
      <main>
         <HomePortrait />
         <AboutMe />
         <MisProyectos />
         <ContactMe/>
         <Footer />
      </main>
   )
}

export default Home