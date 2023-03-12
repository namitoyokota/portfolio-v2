import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export const Index = (): JSX.Element => {
    return (
        <Layout>
            <div className={styles.aboutpane}>
                <div>
                    <h1 className={styles.title}>Namito Yokota</h1>
                    <p>Almost Senior Developer</p>
                    <p className={styles.description}>Angular, Typescript, HTML, CSS</p>
                </div>
                <Image
                    className={styles.profileimg}
                    alt="Namito Yokota Profile"
                    height="150px"
                    width="150px"
                    quality={100}
                    src="/images/profile-3.png"
                    objectFit="contain"
                />
            </div>

            <h1>Projects</h1>
            <p className={styles.description}>This is a list of side projects I've created or currently working on!</p>
            <div className={styles.projectspane}>
                <Link href="https://www.keepintouch.cc" passHref>
                    <a className={styles.project} target="_blank" rel="noopener noreferrer">
                        <h3>Keep In Touch</h3>
                        <p>Website for keeping track of when you last caught up with your friends 😎</p>
                        <p className={styles.date}>Date</p>
                    </a>
                </Link>

                <Link href="https://github.com/namitoyokota/PoseHunt" passHref>
                    <a className={styles.project} target="_blank" rel="noopener noreferrer">
                        <h3>Pose Hunt</h3>
                        <p>Platform for sharing and discovering portrait poses ✌🏼</p>
                        <p className={styles.date}>Date</p>
                    </a>
                </Link>

                <Link href="https://github.com/namitoyokota/CodePortraits" passHref>
                    <a className={styles.project} target="_blank" rel="noopener noreferrer">
                        <h3>Code Portraits</h3>
                        <p>A website for turning code into block images 🖌️</p>
                        <p className={styles.date}>Date</p>
                    </a>
                </Link>
            </div>
        </Layout>
    );
};

export default Index;
