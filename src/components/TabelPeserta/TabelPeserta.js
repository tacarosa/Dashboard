import React, { Component } from 'react'
import './TabelPeserta.scss'
import BootstrapTable from 'react-bootstrap-table-next' 
import ToolkitProvider from 'react-bootstrap-table2-toolkit'
import paginationFactory from 'react-bootstrap-table2-paginator'
import SearchBar from "../../components/seachbar/SearchbarTabel"
import ModalTambahPeserta from '../modal/ModalTambahPeserta'
import ModalDelete from '../modal/ModalDelete'
import edit from "../../assets/img/edit.svg"
import trash from "../../assets/img/trash.svg"
import { connect } from "react-redux"
import store, {history} from '../../store'
import {
    setDataPeserta,
    deleteDataPeserta,
    updateDataPeserta
} from "../../Reducers/PesertaListReducers"

class TabelPeserta extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            data : this.props.data_peserta,
            show : false,
            showModalDelete : false,
            showEdit : false,
            nama : "",
            test : "TPA",
        }
        this.handleShowModal = this.handleShowModal.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleShowModalEdit = this.handleShowModalEdit.bind(this)
        this.handleShowModalDelete = this.handleShowModalDelete.bind(this)
        this.actionFormatter = this.actionFormatter.bind(this)
        this.handleSubmitForm = this.handleSubmitForm.bind(this)
        this.handleDeleteForm = this.handleDeleteForm.bind(this)
        this.handleUpdateForm = this.handleUpdateForm.bind(this)
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value,
        })
    }

    handleSubmitForm(){
        let { nama, test } = this.state
        let prevData = this.props.data_peserta
        let index = (prevData[0] !== undefined) ? prevData[prevData.length-1].id + 1 : 1

        store.dispatch(setDataPeserta(nama,test,index,prevData))

        history.push("/dashboard")
    }

    handleDeleteForm(){
        let index = this.state.rowIndex
        let prevData = this.props.data_peserta
        store.dispatch(deleteDataPeserta(index,prevData))

        history.push("/dashboard")
    }

    handleUpdateForm(){
        let { nama, test, RowSelected } = this.state
        let prevData = this.props.data_peserta
        
        let index = this.state.rowIndex
        store.dispatch(updateDataPeserta(nama,test,index,prevData, RowSelected))

        history.push("/dashboard")
    }


    handleShowModal() {
        this.setState({
            show: !this.state.show
        })
    }
    
    handleShowModalEdit() {
        this.setState({
            showEdit: !this.state.showEdit
        })
    }

    handleShowModalDelete() {
        this.setState({
            showModalDelete: !this.state.showModalDelete
        })
    }
    
    actionFormatter(cell, row, rowIndex) {
        const { hoverIdx } = this.state
        if ((hoverIdx !== null || hoverIdx !== undefined) && hoverIdx === rowIndex) {
            return (
                <div id="action">
                    <button
                        name="edit"
                        className="btn btn-action"
                        onClick={this.handleShowModalEdit}>
                        <img src={edit} alt="Edit" />
                    </button>
                    <button
                        name="hapus"
                        className="btn btn-action-delete"
                        onClick={this.handleShowModalDelete}>
                        <img src={trash} alt="Hapus" />
                    </button>
                </div>
            )
        }
    }

    rowEvents = {
        onClick: (e, row,rowIndex) => {
            this.setState({ 
                RowSelected: row, 
                rowIndex : rowIndex,
                nama : row.nama,
                test : row.test
            })
        },
        onMouseEnter: (e, row, rowIndex) => {
            this.setState({ hoverIdx: rowIndex });
        },
        onMouseLeave: () => {
            this.setState({ hoverIdx: null });
        }
    }

    switchModal = () => {

        // Show Tambah 
        if(this.state.show) {
            return (
                <ModalTambahPeserta
                    show={this.state.show}
                    handleShowModal={this.handleShowModal}
                    handleChange={this.handleChange}
                    nama={this.state.nama}
                    test={this.state.test}
                    handleSubmitForm={this.handleSubmitForm}
                />
            )
        }

        // Show Edit
        if(this.state.showEdit) {
            return (
                <ModalTambahPeserta 
                    show={this.state.showEdit}
                    handleShowModal={this.handleShowModalEdit}
                    showEdit={this.state.showEdit}
                    handleChange={this.handleChange}
                    nama={this.state.nama}
                    test={this.state.test}
                    handleSubmitForm={this.handleUpdateForm}
                />
            )
        }

        // Show Delete
        if(this.state.showModalDelete) {
            return (
                <ModalDelete
                    showModalDelete={this.state.showModalDelete}
                    handleShowModalDelete={this.handleShowModalDelete}
                    handleDeleteForm={this.handleDeleteForm}
                />
            )
        }

    }

    render() {
        const columnsList = [
            { dataField:'id',text:'ID' },
            { dataField:'nama',text:'Nama' },
            { dataField:'test',text:'Test yang Diikuti' },
            { dataField:'status',text:'Status' },
            {
                dataField: '',
                text: 'Aksi',
                formatter: this.actionFormatter,
                formatExtraData: { hoverIdx: this.state.hoverIdx }
            },
        ]

        const options = {
            paginationSize: 4,
            pageStartIndex: 1,
            alwaysShowAllBtns: true, 
            prePageText: 'Back',
            nextPageText: 'Next',
            showTotal: false, 
        }

        return (
            <div id="peserta-list-content">
                {this.switchModal()}
                <ToolkitProvider
                    keyField="id"
                    data={ this.state.data }
                    columns={ columnsList }
                    search
                    >
                    {
                        props => (
                            <div>
                                <div className="tabel-peserta-header-wrapper">
                                    <button 
                                        className={`btn btn-primary ${this.props.customColor}`}
                                        onClick={this.handleShowModal}>
                                        <span>+</span>
                                        Tambah Peserta
                                    </button>
                                    <div className="search-bar">
                                        <SearchBar { ...props.searchProps } />
                                    </div>
                                </div>
                                <BootstrapTable
                                    { ...props.baseProps }
                                    hover
                                    bootstrap4
                                    noDataIndication="Table is Empty"
                                    classes="tabel-peserta"
                                    wrapperClasses="tabel-peserta-wrapper"
                                    bordered={ false }
                                    rowEvents={this.rowEvents}
                                    pagination={ paginationFactory(options) }
                                />
                            </div>
                        )
                    }
                </ToolkitProvider>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        data_peserta: state.peserta.data_peserta,
    };
  }

export default connect(mapStateToProps)(TabelPeserta);
