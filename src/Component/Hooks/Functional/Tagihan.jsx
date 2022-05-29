import React, { useContext } from 'react'
import { Container, Button } from 'reactstrap'
import { keranjangContext } from '../../../App'

const Tagihan = () => {
const countContext = useContext(keranjangContext);

    return (
        <Container>
            <h1 className="display-3">Menu Tagihan</h1>
            <p className="lead">({countContext.keranjangState.jumlah}x) Action Figure Naruto</p>
            <hr className="my-2" />
            <p>Harga Total Rp. {countContext.keranjangState.hargaTotal} .</p>
            <p className="lead">
                <Button color="primary">Lanjutkan Pembayaran</Button>
            </p>
        </Container>
    )
}

export default Tagihan