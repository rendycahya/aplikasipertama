import React, { useState } from 'react';
import { Container } from 'reactstrap';
import TampilComp from './TampilComp';

const HooksComp = () => {
    const [jumlah, setJumlah] = useState(0)

    //login
    const [dataLogin, setDataLogin] = useState({username:'firda', token:'123abcd', isLogin: false});

    //Cek Kondisi sudah login apa belum

    let tampil;

    if(dataLogin.isLogin){
        tampil = <TampilComp 
            username = {dataLogin.username}
            fungsi = {setJumlah}
            jumlah = {jumlah}
        />
    }else{
        tampil = <TampilComp 
            username = "Maaf anda belum login"
            disabled = {true}
        />
    }

    return (
        <Container>
                {tampil}
        </Container>
    )
}

export default HooksComp