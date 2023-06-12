import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export function Content() {
    return (
        <>
            <div className={styles.contentBody}>
                <div className={styles.contentText}>
                    <h1>Take advantage of our offers and purchase your desired book at the best price!</h1>
                    <button className={styles.btn} ><Link href="/store">
                        <span>
                            Check
                        </span>
                    </Link></button>
                </div>
            </div>

        </>
    )
}

//className={styles.contentButton}