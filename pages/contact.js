import React from 'react'
import Circle from '../components/Circle'
import style from '../styles/Contact.module.css'

const contact = () => {
    return (
        <div className={style.container}>
           <Circle
            backgroundColor="green" left="-40vh" top="-60vh"/> 
           <Circle
             backgroundColor="yellow" right="-30vh" bottom="-60vh"/>
           <h1 className={style.title}>GET IN TOUCH</h1>
           <form className={style.form}>
                <input 
                    className={style.inputS}
                    placeholder="Username" />
                <input 
                    className={style.inputS}
                    placeholder="Phone number" />
                <input 
                    className={style.inputL}
                    placeholder="Email" />
                <input 
                    className={style.inputL}
                    placeholder="Subject" />
                <textarea 
                    className={style.textArea}
                    placeholder="Message"
                    rows={6}>
                </textarea>
                <button className={style.buttonF}>SUBMIT</button>
           </form>
        </div>
    )
}

export default contact
