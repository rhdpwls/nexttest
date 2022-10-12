import Head from 'next/head'
import React from 'react'

export default function AboutPage() {
  const name = '고예진'

  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
      </Head>
      <main className={styles.main}>
      <h1>About </h1>
      <p>안녕하세요 {name} 님!</p>
      </main>
    </div>
  )
}
