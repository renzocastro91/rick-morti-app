import { useEffect, useReducer } from "react";

interface Action {
  type: "INIT_REQUEST" | "REQUEST_FAILURE" | "REQUEST_SUCCESS";
  payload?: {
    error?: any;
    data?: any;
  };
}

interface State {
  loading: boolean;
  error: any;
  data: any;
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "INIT_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
        data: null,
      };
    case "REQUEST_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload?.error,
        data: null,
      };
    case "REQUEST_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload?.data,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export function useGetData(API_URL: string) {
  const [state, dispatch] = useReducer(reducer, {
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    requestData();
  }, []);

  async function requestData() {
    try {
      dispatch({ type: "INIT_REQUEST" });
      const response = await fetch(API_URL);
      const json = await response.json();

      if (json.error) {
        dispatch({ type: "REQUEST_FAILURE", payload: { error: json.error } });
      } else {
        dispatch({ type: "REQUEST_SUCCESS", payload: { data: json } });
      }
    } catch (e) {
      console.error("error", e);
    }
  }

  return { data: state.data, error: state.error, loading: state.loading };
}
