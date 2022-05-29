// import react from "react";
// import Blog from "./Blog";
import Produk from '../Class/Produk';
import './CSS/Blog.css';

const Home = () => {
    return (
        <div>
            <Produk stock="10" nama="Macbook Pro 2021" harga="15000000"/>
            <Produk stock="15" nama="Macbook Pro 2022" harga="20000000"/>
            <Produk stock="13" nama="Macbook Pro 2023" harga="20000000"/>
            <Produk stock="50" nama="Macbook Pro 2024" harga="30000000"/>
            <Produk stock="11" nama="Macbook Pro 2025" harga="150000000"/>
            <Produk stock="14" nama="Macbook Pro 2026" harga="12000000"/>
            {/* <Blog 
                tanggal = "17 Mei 2022"
                judul = "Teknologi Blockhain"
                summary = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, reiciendis!" 
            />
            <Blog 
                tanggal = "12 Mei 2022"
                judul = "Iot "
                summary = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, reiciendis!" 
            />
            <Blog 
                tanggal = "17 Mei 2022"
                judul = "Youtuber"
                summary = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, reiciendis!" 
            />    */}
        </div>
    )
}

export default Home;