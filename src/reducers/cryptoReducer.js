import {
  FETCH_CRYPTOS_BEGIN,
  FETCH_CRYPTOS_SUCCESS,
  FETCH_CRYPTOS_FAILURE,
  GET_SELECTED_CRYPTO,
  CLEAR_SELECTED_CRYPTO
} from "actions/cryptoActions";
import Swal from "sweetalert2";
const initialState = {
  cryptos: [],
  loading: false,
  error: null,
  selectedCrypto: {}
};

export default function cryptosReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CRYPTOS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_CRYPTOS_SUCCESS:
      return {
        ...state,
        loading: false,
        cryptos: action.payload.cryptos
      };

    case FETCH_CRYPTOS_FAILURE:
      if (action.payload.failCryptos.length === 10) {
        Swal.fire({
          title: "Ups!",
          text:
            "Ha ocurrido un error al cargar los datos. Por favor, intentelo de nuevo más tarde",
          type: "error",
          confirmButtonText: "Aceptar"
        });
      } else {
        Swal.fire({
          title: "Ups!",
          text:
            "Ha ocurrido un error al cargar los siguientes datos: " +
            action.payload.failCryptos,
          type: "warning",
          confirmButtonText: "Aceptar"
        });
      }

      return {
        ...state,
        loading: false,
        cryptos: action.payload.cryptos
      };
    case GET_SELECTED_CRYPTO:
      return {
        ...state,
        selectedCrypto: action.payload.crypto
      };
    case CLEAR_SELECTED_CRYPTO:
      return {
        ...state,
        selectedCrypto: {}
      };
    default:
      return state;
  }
}
