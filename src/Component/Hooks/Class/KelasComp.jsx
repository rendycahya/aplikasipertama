import React, { Component } from 'react'
import { Container } from 'reactstrap'

export class KelasComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            jumlah: 0
        }
    }

    tambahProduk = () => {
        this.setState({
            jumlah: this.state.jumlah + 1
        })
    }

    render() {
        return (
        <Container >
            <h1>{this.state.jumlah}</h1>
            <button onClick={this.tambahProduk}>Tambah Produk</button>
        </Container>
        )
    }
}

export default KelasComp