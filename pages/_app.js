import "../styles/globals.scss"
import "../styles/fonts.scss"
import { Header } from "../components"

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />{" "}
        </>
    )
}

export default MyApp
