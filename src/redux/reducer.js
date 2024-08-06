import { 
    SEARCHING_MOVIE_FAILED, 
    SEARCHING_MOVIE_REQUEST, 
    SEARCHING_MOVIE_SUCCESS, 
    DETAIL_MOVIE_FAILED,
    DETAIL_MOVIE_REQUEST,
    DETAIL_MOVIE_SUCCESS
} from "./constant"

const initialState = {
    loading : true,
    data : [],
    error : ''    
}

const initialStateDetail = {
    loading : true,
    data : [],
    error : ''    
}


export const detailReducer = (state = initialStateDetail, action) => {
    const _actions = {
        [DETAIL_MOVIE_REQUEST] : () => {
            return {
                ...state,
                loading : true
            }
        },
        [DETAIL_MOVIE_SUCCESS] : () => {
            return {
                loading : false,
                data : action.payload,
            }
        },
        [DETAIL_MOVIE_FAILED] : () => {
            return {
                loading : false,
                data : [],
                error : action.payload
            }
        },
        DEFAULT: () =>state,
    }
    return (_actions[action.type] || _actions.DEFAULT)()
}

export const searchReducer = (state = initialState, action) => {
    const _actions = {
        [SEARCHING_MOVIE_REQUEST] : () => {
            return {
                ...state,
                loading : true
            }
        },
        [SEARCHING_MOVIE_SUCCESS] : () => {
            return {
                loading : false,
                data : action.payload,
            }
        },
        [SEARCHING_MOVIE_FAILED] : () => {
            return {
                loading : false,
                data : [],
                error : action.payload
            }
        },
        DEFAULT: () =>state,
    }
    return (_actions[action.type] || _actions.DEFAULT)()
}

