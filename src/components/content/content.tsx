import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export function Content() {
    return (
        <>
            <div className={styles.contentBody}>
                <div className={styles.contentText}>
                    <h1>Take advantage of our offers and purchase your desired book at the best price!</h1>
                    <button className={styles.contentButton}><Link href="/store">
                        See more
                    </Link></button>
                </div>
            </div>

        </>
    )
}