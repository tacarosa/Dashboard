import React, { Component } from 'react'
import './TabelPeserta.scss'
import BootstrapTable from 'react-bootstrap-table-next' 
import ToolkitProvider from 'react-bootstrap-table2-toolkit'
import paginationFactory from 'react-bootstrap-table2-paginator'
import SearchBar from "../../components/seachbar/SearchbarTabel"
import ModalTambahPeserta from '../modal/ModalTambahPeserta'

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
    }
    
    handleShowModal() {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        const columnsList = [
            { dataField:'id',text:'ID' },
            { dataField:'nama',text:'Nama' },
            { dataField:'test',text:'Test yang Diikuti' },
            { dataField:'status',text:'Status' },
            { dataField:'aksi',text:'Aksi' },
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
