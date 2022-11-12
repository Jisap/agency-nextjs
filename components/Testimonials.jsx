import React from 'react';
import style from '../styles/Testimonials.module.css';
import Circle from './Circle';
import { users } from "../data";
import Image from "next/image"

const Testimonials = () => {
    return (
        <div className={style.container}>
            <Circle backgroundColor="darkblue" top="-70vh" right="0" left="0"/>
            <h1 className={style.title}>Testimonials</h1>
            <div className={style.wrapper}>
                {users.map(user => (
                    <div key={user.id} className={style.card}>
                        <Image
                            alt="testimonialLogo"
                            src={`/img/${user.logo}`}
                            width="30"
                            height="30" 
                        />
                        <p className={style.comment}>
                            {user.comment}
                        </p>
                        <div className={style.person}>
                            <Image
                                className={style.avatar} 
                                src={`/img/${user.avatar}`}
                                width="45"
                                height="45"
                                objectFit="cover"
                                alt="testimonialUser"
                            />
                            <div className={style.info}>
                                <span className={style.username}>{ user.name }</span>
                                <span className={style.jobTitle}>{ user.title }</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials

