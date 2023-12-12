import { AuthProvider } from '@/app/context/auth'
import '../app/globals.css'

export default function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
    )
}