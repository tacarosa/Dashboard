// Actions Type
const REQ_DATA_PESERTA = "peserta/REQ_DATA_PESERTA"
const RCV_DATA_PESERTA = "peserta/RCV_DATA_PESERTA"


// Pure Action creator
export const rcvDataPeserta = (data) => ({ // set
  type: RCV_DATA_PESERTA,
  payload: {
    data_peserta: data,
    status: "rcv_peserta"
  }
});

export const reqDataPeserta = (data) => ({ //get
  type: REQ_DATA_PESERTA,
  payload: {
    data_peserta: data,
    status: "req_peserta"
  }
});

// Action 
export const setDataPeserta = (nama, test, index, prevData) => dispatch => {
  let data = prevData
  data.push({
    id : index,
    nama : nama,
    test : test,
    status : "aktif",
  })
  
  localStorage.setItem("data_peserta",JSON.stringify(data))
  dispatch(rcvDataPeserta(data))
}

export const deleteDataPeserta = (index, prevData) => dispatch => {
  let data = prevData
  data.splice(index,1)

  localStorage.setItem("data_peserta",JSON.stringify(data))
  dispatch(rcvDataPeserta(data))
}

export const updateDataPeserta = (namaNew, testNew, index, prevData, dataSelected) => dispatch => {
  let data = prevData
  let newData = {
      id : dataSelected.id,
      nama : (namaNew === "") ? dataSelected.nama : namaNew,
      test : testNew,
      status : "aktif",
    }

  const insert = (arr, index, newData) => [
    // part of the array before the specified index
    ...arr.slice(0, index),
    // inserted item
    newData,
    // part of the array after the specified index
    ...arr.slice(index)
  ]

  const result = insert(data, index, newData)
  
  localStorage.setItem("data_peserta",JSON.stringify(result))
  dispatch(rcvDataPeserta(result))
}

//Init 
const initialState = {
  data_peserta: []
};

// Reducers
export default function PesertaListReducers(state = initialState, action) {
  switch (action.type) {
    case REQ_DATA_PESERTA:
      return {
        ...state,
        data_peserta: action.payload.data_peserta,
      };
    case RCV_DATA_PESERTA:
      return {
        ...state,
        data_peserta: action.payload.data_peserta
      };
    default:
      return state;
  }
}

