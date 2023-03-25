import '@/styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <title>명지클럽</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
