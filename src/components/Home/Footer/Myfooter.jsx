import React from 'react'
import styles from './myfooter.module.css'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Myfooter = () => {
    return (
        <>
            <div className={styles['div-footer']}>
            <h2 className={styles.h2}>Contactame</h2>
                <div>
                    
                    <ul className='flex justify-center items-center'>
                    <li className='m-2'>         
                        <a href='https://www.facebook.com/obedaguilarvazquez/'target='_blank'><FacebookRoundedIcon fontSize="large" /></a></li>
                    <li className='m-2'><a href='https://www.instagram.com/obedaguilarv/'target='_blank'><InstagramIcon fontSize="large" /></a></li>
                    <li className='m-2'><a href='https://github.com/obedaguilar/' target='_blank'><GitHubIcon fontSize="large" /></a></li>
                    <li className='m-2'><a href='https://www.linkedin.com/in/obed-yamil-aguilar-vazquez-37429a19a/' target='_blank'><LinkedInIcon fontSize="large" /></a></li>
                </ul></div>
            </div>
            <div className='flex justify-around py-10 text-left bg-black'>
                <div>
                    <p>
                        Terms and conditions
                    </p>
                    <p>
                        Privacy policy
                    </p>
                </div>
                <div>
                © {new Date().getFullYear()}   <a className="text-gray-400" href="/">  </a>Todos los derechos reservados <br/>
                </div>
            </div>
        </>

    )
}

export default Myfooter
