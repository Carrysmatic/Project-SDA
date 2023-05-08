import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import styles from '@/styles/Home.module.css'
import { Button } from '@mui/material';
import Link from 'next/link';

export function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarLeftSide}>
                <div className={styles.navbarLogo}>
                    <AutoStoriesIcon color="inherit" />
                    <h2>
                        <Link href="/">
                            Corner Book
                        </Link>
                    </h2>
                </div>
                <div className={styles.navbarPages}>
                    <div className={styles.navbarHome}>
                        <HomeIcon color="inherit" />
                        <h2>
                            <Link href="/">
                                Home
                            </Link></h2>
                    </div>
                    <div className={styles.navbarStore}>
                        <StoreIcon color="inherit" />
                        <h2> <Link href="/store">
                            Store
                        </Link></h2>
                    </div>
                </div>
            </div>
            <div className={styles.navbarRightSide}>
                <div className={styles.navbarCart}>
                    <LocalGroceryStoreIcon color="inherit" />
                    <h2><Link href="/cart">
                        Cart
                    </Link></h2>
                </div>
                <div className={styles.navbarAccount}>
                    <Button variant="outlined" color="inherit">LOGIN</Button>
                </div>
            </div>
        </div>
    )
}