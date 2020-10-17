import '../styles/globals.css'
import { Flipper, Flipped } from 'react-flip-toolkit'

function Global({ Component, pageProps, router }) {
  return (
    <Flipper flipKey={router.asPath}>
      <Flipped flipId="page" stagger>
        <div>
          <Component {...pageProps} />
        </div>
      </Flipped>
    </Flipper>
  )
}

export default Global
