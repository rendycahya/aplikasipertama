import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import qs from 'querystring';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import {
    Container,
    Col,
    Row,
    FormGroup,
    Alert,
    Label,
    Input,
    Button,
    Form,
} from "reactstrap";

const api = 'http://localhost:3001';

const EditComp = () => {
    const location = useLocation();
    const { data } = location.state;
    const [id, setId] = useState(data.id_mahasiswa);
    const [nim, setNim] = useState(data.nim);
    const [nama, setNama] = useState(data.nama);
    const [jurusan, setJurusan] = useState(data.jurusan);
    const [response, setResponse] = useState('');
    const [display, setDisplay] = useState('none');


    useEffect(()=>{
        console.log(data);
    },[])

    useEffect(()=>{
        console.log(nim);
        console.log(nama);
        console.log(jurusan);
    },[nim,nama,jurusan])

    // const handleChange = (e) => {
    //     ({[e.target.name] : e.target.value})
    // }

    const ubahMahasiswa =  async (e, idmahasiswa) => {
        e.preventDefault();
        const data = qs.stringify({
            id_mahasiswa: idmahasiswa,
            nim: nim,
            nama: nama,
            jurusan: jurusan,
        });

        await axios.put(api+'/ubah', data)
        .then(json =>{
            if(json === 200){
                setResponse(json.data.values)
                setDisplay('block')
            }else{
                setResponse(json.data.values)
                setDisplay('block')
            }
        })
    }


        return (
        <Container>
            <h4>Form Tambah Data</h4>
            {display === 'none' ?
                null :
                <Alert color="success">
                    {response}
                </Alert>
            }
            
            <Form className="form">
            <Col>
                <Label>NIM</Label>
                <FormGroup>
                <Row>
                    <Col>
                    <Input
                        type="text"
                        name="nim"
                        placeholder="Masukkan NIM"
                        value={nim}
                        onChange={e => setNim(e.target.value)}
                    />
                    </Col>
                </Row>
                </FormGroup>
            </Col>
            <Col>
                <Label>Nama</Label>
                <FormGroup>
                <Row>
                    <Col>
                    <Input 
                        type="text" 
                        name="nama" 
                        placeholder="Masukkan Nama" 
                        value={nama}
                        onChange={e => setNama(e.target.value)}
                        />
                    </Col>
                </Row>
                </FormGroup>
            </Col>
            <Col>
                <Label>Jurusan</Label>
                <FormGroup>
                <Row>
                    <Col>
                    <Input
                        type="text"
                        name="jurusan"
                        placeholder="Masukkan Jurusan"
                        value={jurusan}
                        onChange={e => setJurusan(e.target.value)}
                    />
                    </Col>
                </Row>
                </FormGroup>
            </Col>
            <Col>
                <FormGroup>
                <Row>
                    <Col>
                    <Button type="submit" onClick={(e) => ubahMahasiswa(e, id)}>Update</Button>
                    </Col>
                </Row>
                </FormGroup>
            </Col>
            </Form>
        </Container>
        )
}

export default EditComp