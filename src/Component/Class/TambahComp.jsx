import React, { Component } from "react";
import axios from "axios";
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

const api = "http://localhost:3001";

class TambahComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
        nim: "",
        nama: "",
        jurusan: "",
        response: "",
        display: "none",
        };
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    AddMahasiswa = async (e) => {
        e.preventDefault();
        await axios.post(api+'/tambah',{
            nim: this.state.nim,
            nama: this.state.nama,
            jurusan: this.state.jurusan
        })
        .then(json => {
            if(json.data.status === 200){
                this.setState({
                    response: json.data.values,
                    display: "block"
                })
            }else {
                this.setState({
                    response: json.data.values,
                    display: "block"
                })
            }
        })
    }


    render() {
        return (
        <Container>
            <h4>Form Tambah Data</h4>
            {this.state.display === 'none' ?
                null :
                <Alert color="success">
                    {this.state.response}
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
                        value={this.state.nim}
                        onChange={this.handleChange}
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
                        value={this.state.nama}
                        onChange={this.handleChange}
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
                        value={this.state.jurusan}
                        onChange={this.handleChange}
                    />
                    </Col>
                </Row>
                </FormGroup>
            </Col>
            <Col>
                <FormGroup>
                <Row>
                    <Col>
                    <Button type="submit" onClick={this.AddMahasiswa}>Submit</Button>
                    </Col>
                </Row>
                </FormGroup>
            </Col>
            </Form>
        </Container>
        );
    }
}

export default TambahComp;
