// Action Types
export const PAGE_CHANGE    = "PAGE_CHANGE";


// Pure Action



const initialState = {
    peserta : []
  };
  
  
  // REDUCERS
  export default function PesertaListReducers(state = initialState, action) {
    switch (action.type) {
      case PAGE_CHANGE:
          return {
            ...state,
            // peserta: peserta
          };
      default:
        return state;
    }
  }
  