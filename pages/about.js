import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function About ()
{
    return (
        <div className={styles.about}>
            <h1> About the Project. </h1>
            <p>Lorem</p>
            <Image src="/images/charizard.png" width="300" height="300" alt="charizard"/>
        </div>
    )
}
