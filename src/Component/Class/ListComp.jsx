import React, { Component } from 'react';
import axios from 'axios';
import qs from 'querystring';
import {Table, Button, Container, NavLink, Alert} from 'reactstrap';
import { Link } from 'react-router-dom';

const api = 'http://localhost:3001';

class ListComp extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            mahasiswa: [],
            response: '',
            display: 'none'
        }
    }

    componentDidMount(){
        axios.get(api+'/tampil').then(res=>{
            this.setState({
                mahasiswa: res.data.values
            })
        })
    }

    Deletemahasiswa = (id) => {
        const {mahasiswa} = this.state;
        const data = qs.stringify({
            id_mahasiswa: id
        })

        axios.delete(api+'/hapus',
        {
            data: data,
            headers: {'Content-type': 'application/x-www-form-urlencoded'}
        })
        .then(json=>{
            if(json.data.status === 200){
                this.setState({
                    response: json.data.values,
                    mahasiswa: mahasiswa.filter(mahasiswa => mahasiswa.id_mahasiswa !== id),
                    display: 'block'
                })
                this.props.history.push('/mahasiswa')
            }else {
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
                // this.props.history.push('/mahasiswa')
            }
        })
    }

    render() {
        return (
            <Container>
                <h2>Data Mahasiswa</h2>
                {this.state.display === 'none' ?
                null :
                <Alert color="success">
                    {this.state.response}
                </Alert>
                }
                <Link to='/mahasiswa/tambah' style={{paddingLeft: 0}}>
                    <Button color="success">
                        Tambah Data
                    </Button>
                </Link>
                <hr />
                <Table className='table-bordered'>
                    <thead>
                        <tr>
                            <th>NIM</th>
                            <th>Nama</th>
                            <th>Jurusan</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.mahasiswa.map(mahasiswa=> (
                            <tr key={mahasiswa.id_mahasiswa}>
                                <td>{mahasiswa.nim}</td>
                                <td>{mahasiswa.nama}</td>
                                <td>{mahasiswa.jurusan}</td>
                                <td>
                                    <Link to={'/mahasiswa/edit'} 
                                    state={{
                                        data: {
                                            id_mahasiswa: mahasiswa.id_mahasiswa,
                                            nim: mahasiswa.nim,
                                            nama: mahasiswa.nama,
                                            jurusan: mahasiswa.jurusan,
                                        }
                                    }}
                                    >
                                        <Button>Edit</Button>
                                    </Link>
                                    <span> </span>
                                    <Button onClick={()=>this.Deletemahasiswa(mahasiswa.id_mahasiswa)} color='danger'>Hapus</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>

            
        );
    }
}

export default ListComp;