import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
    } from 'reactstrap';

import { Link } from 'react-router-dom';

const CardComp = (props) => {
    return (
        <div>
            <div>
                <Card>
                    <CardImg top width="100%" src="https://placeimg.com/640/480/tech" alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h3">{props.judul}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{props.tanggal}</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Link to={`/detail/${props.id}`} state={{data: {
                            judul: props.judul,
                            tanggal: props.tanggal
                        }}}>
                        <Button>Detail</Button>
                    </Link>
                    
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default CardComp