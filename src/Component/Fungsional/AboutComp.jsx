import React from "react";
import { Container, Media, Row, Col } from "reactstrap";
import CardComp from "./CardComp";

export const AboutComp = () => {
    return (
        <div>
        <Container>
            <Media body>
                <Media heading>About Page </Media>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
                in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </Media>
            <br />
            <Row>
            <Col>
                <CardComp id="1" judul="Belajar React" tanggal="22/05/2022" />
            </Col>
            <Col>
                <CardComp id="2" judul="Belajar Golang" tanggal="23/05/2022"/>
            </Col>
            <Col>
                <CardComp id="3" judul="Belajar PHP" tanggal="24/05/2022"/>
            </Col>
            </Row>
        </Container>
        </div>
    );
};
