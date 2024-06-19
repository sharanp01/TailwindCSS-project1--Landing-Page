import Header from './Components/Header';
import Footer from './Components/Footer';
import Body from './Components/Body';
function App() {


  return (
    <>
      <div className="bg-amber-50 min-h-screen px-6 py-3 flex flex-col gap-6">
        <Header />
        <Body />
        <Footer/>
      </div>
    </>

  )
}

export default App
