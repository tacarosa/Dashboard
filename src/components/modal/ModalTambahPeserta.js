import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import "./Modal.scss"

const ModalTambahPeserta = (props) => {
    const handleSubmitForm = () => {
        window.location.reload()
    }
    return (
        <Modal
            show={props.show}
            onHide={props.handleShowModal}
            centered
            size="lg"
            id="modal-tambah-peserta"
            >
            <Modal.Header closeButton>
                <Modal.Title>Tambah Peserta</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Silahkan masukkan data peserta pada form dibawah ini.
                </p>
                <Form.Group controlId="name">
                    <Form.Label>Nama Peserta</Form.Label>
                    <Form.Control type="email" placeholder="Masukkan nama peserta" />
                </Form.Group>
                
                <Form.Group controlId="test">
                    <Form.Label>Test yang diikuti</Form.Label>
                    <Form.Control as="select">
                        <option>TPA</option>
                        <option>Psikotes</option>
                        <option>Wawancara</option>
                    </Form.Control>
                </Form.Group>

                <Button 
                    type="submit"
                    onClick={handleSubmitForm}>
                    Tambah
                </Button>
            </Modal.Body>
        </Modal>
    )
}

export default ModalTambahPeserta

