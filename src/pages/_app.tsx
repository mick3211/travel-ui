import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { Header } from 'components/surfaces/Header';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (
        <>
            <Header currentPage={router.asPath} />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
