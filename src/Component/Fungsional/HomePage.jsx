import React from "react";
import { Container, Media  } from 'reactstrap';

const HomePage = (props) => {
    return (
        <div>
        <Container>    
            <Media>
                <Media body>
                    <Media heading>
                    Home Page 
                    </Media>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </Media>
            </Media>
        </Container>
        </div>
    );
};

export default HomePage;