import React from 'react'
import App, { Container } from 'next/app'
import Nav from "../components/nav"
import Footer from "../components/footer"


class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <div className="app-container">
          <Nav />
          <main>
            <Component {...pageProps} />
          </main>
          <Footer/>
        </div>
        <style jsx>{`
          main {
            flex: 1;
          }
          
          .app-container {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
            `}</style>
      </Container>
    )
  }
}

export default MyApp
