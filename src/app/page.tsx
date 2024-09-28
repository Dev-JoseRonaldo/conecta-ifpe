import { Metadata } from "next"
import Head from "next/head"

export const metadata: Metadata = {
  title: "Conecta IFPE",
  icons: "/favicon.ico",

  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "localhost:3000",
    images: [
      {
        width: 404,
        height: 316,
        url: "https://mir-s3-cdn-cf.behance.net/projects/404/a7563b49251985.Y3JvcCw3MzIsNTczLDEzNyww.png",
      },
    ],
  },
}

export default function Web() {
  return (
    <>
      <Head>
        <title>Conecta IFPE</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              Conecta IFPE
            </h1>
          </div>
        </div>
      </section>
    </>
  )
}
