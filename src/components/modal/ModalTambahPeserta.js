import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

const ModalTambahPeserta = (props) => {
    const submitForm = () => {
        window.location.reload()
    }
    return (
        <Modal
            show={props.show}
            onHide={props.handleShowModal}
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
            </Modal.Body>
            <Modal.Footer>
                <Button variant="light" onClick={props.handleShowModal}>Batal</Button>
                <Button variant="primary" onClick={submitForm} type="submit">Simpan</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalTambahPeserta

