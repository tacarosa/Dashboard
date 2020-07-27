import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import "./Modal.scss"

const ModalTambahPeserta = (props) => {
    return (
        <Modal
            show={props.show}
            onHide={props.handleShowModal}
            centered
            size="lg"
            id="modal-tambah-peserta"
            >
            <Modal.Header closeButton>
                <Modal.Title>
                    {(props.showEdit)? "Edit " : " Tambah"} Peserta
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Silahkan masukkan data peserta pada form dibawah ini.
                </p>
                <Form.Group controlId="name">
                    <Form.Label>Nama Peserta</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Masukkan nama peserta" 
                        name="nama"
                        value={props.nama}
                        onChange={props.handleChange}
                        />
                </Form.Group>
                
                <Form.Group controlId="test">
                    <Form.Label>Test yang diikuti</Form.Label>
                    <Form.Control 
                        as="select"
                        name="test"
                        onChange={props.handleChange}
                        value={props.test}
                        >
                        <option value="TPA">TPA</option>
                        <option value="Psikotes">Psikotes</option>
                        <option value="Wawancara">Wawancara</option>
                    </Form.Control>
                </Form.Group>

                <Button 
                    type="submit"
                    onClick={props.handleSubmitForm}>
                    {(props.showEdit)? "Edit" : "Tambah"}
                </Button>
            </Modal.Body>
        </Modal>
    )
}

export default ModalTambahPeserta

