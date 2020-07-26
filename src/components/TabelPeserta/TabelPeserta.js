import React, { Component } from 'react'
import './TabelPeserta.scss'
import BootstrapTable from 'react-bootstrap-table-next' 
import ToolkitProvider from 'react-bootstrap-table2-toolkit'
import paginationFactory from 'react-bootstrap-table2-paginator'
import SearchBar from "../../components/seachbar/SearchbarTabel"
import ModalTambahPeserta from '../modal/ModalTambahPeserta'
import edit from "../../assets/img/edit.svg"
import trash from "../../assets/img/trash.svg"

class TabelPeserta extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data : [
                 {id: "1", nama : "adad", test : "psikotes", status : "aktif", aksi : "adjjd"},
                 {id: "3", nama : "adad", test : "psikotes", status : "aktif", aksi : "taca"},
             ],
             show : false
        }
        this.handleShowModal = this.handleShowModal.bind(this)
        this.actionFormatter = this.actionFormatter.bind(this)
    }
    
    handleShowModal() {
        this.setState({
            show: !this.state.show
        })
    }
    
    actionFormatter(cell, row, rowIndex) {
        const { hoverIdx } = this.state
        if ((hoverIdx !== null || hoverIdx !== undefined) && hoverIdx === rowIndex) {
            return (
                <div id="action">
                    <button
                        name="verifikasi"
                        className="btn btn-action"
                        onClick={this.handleShowModal}>
                        <img src={edit} alt="Edit" />
                    </button>
                    <button
                        name="hapus"
                        className="btn btn-action-delete">
                        <img src={trash} alt="Hapus" />
                    </button>
                </div>
            )
        }
    }

    rowEvents = {
        onClick: (e, row) => {
            this.setState({ 
                RowSelected: row, 
            })
        },
        onMouseEnter: (e, row, rowIndex) => {
            this.setState({ hoverIdx: rowIndex });
        },
        onMouseLeave: () => {
            this.setState({ hoverIdx: null });
        }
    }

    render() {
        const columnsList = [
            { dataField:'id',text:'ID' },
            { dataField:'nama',text:'Nama' },
            { dataField:'test',text:'Test yang Diikuti' },
            { dataField:'status',text:'Status' },
            {
                dataField: 'aksi',
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
                {
                    (this.state.show) ? 
                    <ModalTambahPeserta 
                        show={this.state.show}
                        handleShowModal={this.handleShowModal}
                    /> : null
                }
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

export default TabelPeserta
