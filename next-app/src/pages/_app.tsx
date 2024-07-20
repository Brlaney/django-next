import Head from 'next/head';
import type { AppProps } from 'next/app';
import styles from '@/styles/globals.scss';
import { seo } from '@/lib/seo';
import Navbar from '@/components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='keywords' content={seo.keywords} />
        <meta name='description' content={seo.description} />
        <link rel='icon' type='image/svg+xml' href='/django-next-favicon.svg' />
        <title>{seo.title}</title>
      </Head>
      <div className={styles.container}>
        <Navbar />
        <main className={styles.main}>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
};

export default MyApp;
