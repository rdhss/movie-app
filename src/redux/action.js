import axiosInstance from '../axios/axiosInstance'
import { 
SEARCHING_MOVIE_FAILED, 
SEARCHING_MOVIE_SUCCESS, 
SEARCHING_MOVIE_REQUEST,
DETAIL_MOVIE_FAILED,
DETAIL_MOVIE_REQUEST,
DETAIL_MOVIE_SUCCESS
} from './constant'

const fetchingMovieRequest = () => {
    return {
        type: SEARCHING_MOVIE_REQUEST
    }
}

const fetchingMovieSucess = (data) => {
    return {
        type: SEARCHING_MOVIE_SUCCESS,
        payload: data
    }
}

const fetchingMovieFailed = (err) => {
    return {
        type: SEARCHING_MOVIE_FAILED,
        payload: err
    }
}

const fetchingMovieDetailRequest = () => {
    return {
        type: DETAIL_MOVIE_REQUEST
    }
}

const fetchingMovieDetailSucess = (data) => {
    return {
        type: DETAIL_MOVIE_SUCCESS,
        payload: data
    }
}

const fetchingMovieDetailFailed = (err) => {
    return {
        type: DETAIL_MOVIE_FAILED,
        payload: err
    }
}




export const fethingSearching = (payload) => {
    return (dispatch) => {
        dispatch(fetchingMovieRequest());
        axiosInstance({
            method: 'GET',
            params: {
                s: payload.name,
                page: payload.page
            }
        })
            .then((res) => {
                console.log(res.data);
                
                if (res.Response == 'False' || res.data.Response == 'False') {
                    console.log('err');
                    
                    dispatch(fetchingMovieFailed('error'))
                } else {
                    dispatch(fetchingMovieSucess(res.data))
                }
            })
            .catch((err) => console.log(err))
    }
}


export const fethingDetail = (payload) => {
    return (dispatch) => {
        dispatch(fetchingMovieDetailRequest());
        axiosInstance({
            method: 'GET',
            params: {
                i: payload.id
            }
        })
            .then((res) => {
                console.log(res);
                dispatch(fetchingMovieDetailSucess(res?.data))
            })
            .catch((err) => dispatch(fetchingMovieDetailFailed(err)))
    }
}