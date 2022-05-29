import React, { useContext, useReducer } from 'react'
import { Link } from 'react-router-dom';
import { Button, Card, CardImg, Col, Container, Row } from 'reactstrap';
import { keranjangContext } from '../../../App';

const HooksReducer = () => {
    const countContext = useContext(keranjangContext)
    return (
        <Container>
            <br />
            <Row>
                <Col xs="6">
                    <Card>
                        <CardImg top width="100%" src="https://placeimg.com/640/480/tech" alt="Card image cap" />
                    </Card>
                </Col>
                <Col xs="6">
                    <h3>Action Figure Naruto Sasuke Sakura Kakashi Gaara</h3>
                    <p>Harga</p>
                    <h3>Rp. {countContext.keranjangState.hargaSatuan}</h3>
                    <p>Jumlah</p>
                    <Row>
                        <Col>
                            <Button color='danger' onClick={()=> countContext.keranjangDispatch({type:'tambah'})}>+</Button>
                        </Col>
                        <Col>{countContext.keranjangState.jumlah}</Col>
                        <Col>
                            {
                                countContext.keranjangState.jumlah === 1 ?
                                <Button onClick={()=> countContext.keranjangDispatch({type: 'kurang'})} disabled>-</Button>  
                                :
                                <Button onClick={()=> countContext.keranjangDispatch({type: 'kurang'})}>-</Button> 
                            }
                            
                        </Col>
                    </Row>
                    <br />
                    <Button color='success' size='large'>
                        Total Rp. {countContext.keranjangState.hargaTotal}
                    </Button>
                    <hr />
                    <Link to='/tagihan'>Tagihan</Link>
                </Col>
            </Row>
        </Container>
    )
}

export default HooksReducer;