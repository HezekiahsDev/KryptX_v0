import { Navbar, Footer, Loader, Services, Transactions, Welcome } from "./components"

const App = () => {

  return (
    <div>
      <h1 className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar />
          <Welcome />
        </div>
        <Services />
        <Transactions />
        <Footer />
      </h1>
    </div>

  )
}

export default App
