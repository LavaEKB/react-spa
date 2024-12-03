import { Route, Routes } from "react-router-dom";
import { Footer } from './components/Footer';
import { Header } from './components/Header';

import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { NotFound } from './pages/NotFound'
import { Category } from './pages/Category'
import { Reciepe } from './pages/Reciepe'

function App() {
  return (
    <div className="App">
      <Header />
      <main className='container content'>
        <Routes basename='/react-spa'>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/meal/:idMeal" element={<Reciepe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )

    ;
}

export default App;
