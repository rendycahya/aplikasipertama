import './App.css';
// import BootstrapComp from './Component/Class/BootstrapComp';
import NavbarComp from './Component/Fungsional/NavbarComp';
import { BrowserRouter,Routes, Route, } from "react-router-dom";
import HomePage from './Component/Fungsional/HomePage';
import { AboutComp } from './Component/Fungsional/AboutComp';
import ListComp from './Component/Class/ListComp';
import TambahComp from './Component/Class/TambahComp';
import EditComp from './Component/Class/EditComp';
import KelasComp from './Component/Hooks/Class/KelasComp';
import HooksComp from './Component/Hooks/Functional/HooksComp';
import HooksUseEffects from './Component/Hooks/Functional/HooksUseEffects';
import { CartContext } from './CartContext';
import { createContext, useReducer, useState } from 'react';
import ProductComp from './Component/Hooks/Functional/ProductComp';
import HooksReducer from './Component/Hooks/Functional/HooksReducer';
import Tagihan from './Component/Hooks/Functional/Tagihan';
// import DetailComp from './Component/Fungsional/DetailComp';

export const keranjangContext = createContext()

const initialState = {
  jumlah: 1,
  hargaSatuan: 100000,
  hargaTotal: 100000
};

const reducer = (state, action) =>{
  switch(action.type) {
      case 'tambah' : return {
          ...state,
          jumlah: state.jumlah + 1,
          hargaTotal: state.hargaSatuan + (state.hargaSatuan * state.jumlah)
      }
      case 'kurang' : return {
          ...state,
          jumlah: state.jumlah - 1,
          hargaTotal: (state.hargaSatuan * state.jumlah) - state.hargaSatuan
      }
      default:
          return state;
  }
}


const App = () => {

  const [value, setValue] = useState(0);

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <BrowserRouter>

    <CartContext.Provider value={{value, setValue}}>
      <NavbarComp />
      <keranjangContext.Provider value={{keranjangState: count, keranjangDispatch: dispatch}}>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/about' element={<AboutComp />}/>
          <Route path='/mahasiswa' element={<ListComp />} />
          <Route path='/mahasiswa/tambah' element={<TambahComp />} />
          <Route path='/mahasiswa/edit' element={<EditComp />} />
          <Route path='/kelas' element={<KelasComp />} />
          <Route path='/hooks' element={<HooksComp />} />
          <Route path='/useeffects' element={<HooksUseEffects />} />
          <Route path='/produk' element={<ProductComp />} />
          <Route path='/reducer' element={<HooksReducer />} />
          <Route path='/tagihan' element={<Tagihan />} />
        </Routes>
      </keranjangContext.Provider>
    </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
