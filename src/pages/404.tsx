import Link from "next/link";
import styles from '@/styles/Home.module.css'


export default function FourOhFour() {
    return <div className={styles.error}>
        <div className={styles.errorContent}>
            <h1>Oups...something went wrong Go back to
                <Link className={styles.errorLink} href="/">
                    homepage
                </Link></h1>
        </div>
    </div>
}