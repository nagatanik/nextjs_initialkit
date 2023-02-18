import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { SWRConfig } from 'swr'

import { fetcher } from '@/utils'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ChakraProvider>
        <SWRConfig
            value={({
              shouldRetryOnError: false,
              fetcher,
            })}
        >
          <Component {...pageProps} />
        </SWRConfig>
      </ChakraProvider>

    </>
  )
}

export default App