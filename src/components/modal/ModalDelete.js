import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import "./Modal.scss"

const ModalDelete = (props) => {
    const handleSubmitForm = () => {
        window.location.reload()
    }
    return (
        <Modal
            show={props.showModalDelete}
            onHide={props.handleShowModalDelete}
            centered
            id="modal-delete"
            >
            <Modal.Body>
                <h4>
                    Apakah anda yakin untuk menghapus data ?
                </h4>
                <Button 
                    type="submit"
                    className="btn-dashboard"
                    onClick={handleSubmitForm}>
                    Hapus
                </Button>
            </Modal.Body>
        </Modal>
    )
}

export default ModalDelete

