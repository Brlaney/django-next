import Head from 'next/head';
import type { AppProps } from 'next/app';
import styles from '@/styles/globals.scss'
import Navbar from '@/components/Navbar/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='keywords' content='testing' />
        <meta name='description' content='testing' />
        <link rel='icon' type='image/png' href='/favicon.ico' />
        <title>Charts</title>
      </Head>
      <div className={styles.container}>
        <Navbar />
        <main className={styles.main}>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  )
};

export default MyApp;
