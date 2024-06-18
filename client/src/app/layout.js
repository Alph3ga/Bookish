import Header from "../components/Header";
import Footer from "../components/Footer"
import '@/styles/index.css'

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <Header/>
          <main>{children}</main>
          <Footer/>
        </body>
      </html>
    )
  }