import '@/styles/globals.css'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import type { AppProps } from 'next/app'
import { ShoppingCartProvider } from '@/context/cartContext';


export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <ShoppingCartProvider>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider >
    </ShoppingCartProvider>
  )
}
