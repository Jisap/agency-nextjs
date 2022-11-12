import React from 'react'
import style from '../styles/Intro.module.css';
import Image from 'next/image'
import Circle from './Circle';

const Intro = () => {
    return (
        <div className={style.container}>

        <Circle backgroundColor="#01c686" top="-45vh" left="-45vh" />
        <Circle backgroundColor="#01c686" right="-40vh" />

            <div className={style.card}>
                <h1 className={style.title}>
                    <span className={style.brand}>AV0CADO</span>DIGITAL 
                    PRODUCT 
                    AGENCY
                </h1>
                <p className={style.desc}>Create live segments and target the right people for messages based on their behaviors.</p>
                <button className={style.button}>DISCOVER</button>  
            </div>

            <div className={style.card}>
                <Image src="/img/Avocado.png" 
                        alt="" 
                        layout="fill"
                        objectFit="cover" />
            </div>
            
        </div>
    )
}

export default Intro
