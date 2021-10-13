import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const footer = ()=> {
    return (
        <>
        <footer>
            <Container>
                <Row>
                    <Col md={12}>
                        <span className="text-centre">
                            Copyright &copy; Abdul Mannan

                        </span>
                    </Col>
                </Row>
            </Container>

        </footer>
        
        </>
    );
}

export default footer;
