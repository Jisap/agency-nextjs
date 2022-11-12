import React from 'react'
import { data } from '../../data';
import style from '../../styles/Product.module.css'
import Image from 'next/image'
import Link from "next/link"

const Product = ({ product }) => {
    return (
        <div className={style.container}>
            <div className={style.cardL}>
                {product.images.map((img) => (
                    <div key={img.id} className={style.imgContainer}>
                        <Image
                            src={img.url}
                            objectFit="cover"
                            layout="fill"
                            alt=""
                        />
                    </div>
                ))}
            </div>
            <div className={style.cardS}>
                <h1 className={style.title}>{product.title}</h1>
                <p className={style.desc}>{product.longDesc}</p>
                <button className={style.button}>
                    <Link href="/contact">Contact</Link>
                </button>
            </div>
        </div>
    )
}

//2º
export const getStaticProps = async (ctx) => { // De cada ruta con sus params obtendremos el name
    const name = ctx.params.name;
    const product = data.filter((item) => item.name === name)[0] // Con el name obtendremos la info de cada producto {}
    return{
        props: { product }                                       // Esta info se pasa al componente como props
    }
}

//1º
export const getStaticPaths = async() => {  // Contruimos los paths a cada uno de los products
    const products = data;
    const paths = products.map( item => {
        return{
            params:{
                name: item.name             // Cada path estará compuesto por /products/[name], siendo esto último los params
            }                               // Los params se considera el context (ctx)    
        };
    });
    return{
        paths,
        fallback: false
    }
}

export default Product
