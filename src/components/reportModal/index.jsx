import React from 'react';

import { Container, Modal, Close, Title, Content } from './styles';

import { Input, Button } from '../';

export default ({ isOpen, close, onChange, onSubmit }) => {
    return (
        <Container isOpen={isOpen}>
            <Modal>
                <Close>
                    <div>
                        <span onClick={close}>X</span>
                    </div>
                </Close>
                <Title>
                    <h2>Report Survivor</h2>
                </Title>

                <Content>
                    <p>Saw another survivor that is turning into a zombie?</p>
                    <p>Report him on the field below: </p>

                    <form onChange={onChange} onSubmit={onSubmit}>
                        <Input placeholder="Survivor name" />
                        <Button type="submit" width="50px" height="50px">
                            <span>></span>
                        </Button>
                    </form>
                </Content>
            </Modal>
        </Container>
    );
};
