import React from 'react'
import style from '../styles/Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'


const Footer = () => {
    return (
        <div className={style.container}>
          <div className={style.cardL}>
            <h1 className={style.title}>AV0CADO CREATIVES.</h1>
            <h1 className={style.linkTitle}>
              <Link href="/contact" passHref>
              <>
                <span className={style.linkText}> WORK WITH US</span>
                <Image
                  alt=""
                  src="/img/link.png"
                  width="40px"
                  height="40px"
                />
               </> 
              </Link>
            </h1>
          </div>
          <div className={style.cardS}>
            <div className={style.cardItem}>
              12 ADAM STREET NY <br/> USA
            </div>
            <div className={style.cardItem}>
              CONTACT@LAMA.DEV <br/> 213 2134 22344
            </div>
          </div>
          <div className={style.cardM}>
            <div className={style.cardItem}>
              FOLLOW US:
               <br/> __FB__IN__BE__TW
            </div>
            <div className={style.cardItem}>
              2022 LAMA INTERACTIVE, 
              <br/> 
              ALL RIGHTS RESERVED
            </div>
          </div>
        </div>
    )
}

export default Footer
