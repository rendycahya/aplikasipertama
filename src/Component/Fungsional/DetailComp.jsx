import React from 'react'
import { useLocation } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

const DetailComp = () => {
    const location = useLocation();
    const { data } = location.state;
    return (
        <div>
            <Container>
            <h1 className="display-3">{data.judul}</h1>
            <p className="lead">{data.tanggal}</p>
            <hr className="my-2" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p className="lead">
            <Button color="primary">Learn More</Button>
            </p>
            </Container>
        </div>
    )
}

export default DetailComp