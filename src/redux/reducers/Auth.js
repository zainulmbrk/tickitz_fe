const initialState = {
    loading: false,
    data: {
        "token": null,
        "user_id": null,
        "role": null,
        "firstname": null
    },
    error:null,
    isLogin: false
}

const Fetch = (state=initialState, action={})=>{
    switch(action.type){
        case "LOGIN_REQUEST":
            return{...state, loading:true}
        case "LOGIN_ERROR":
            return{...state, loading:false, data: state.data, error: action.payload, isLogin: false}
        case "LOGIN_SUCCESS":
            return{...state, loading:false, data: action.payload, error:null, isLogin:true}
        case "AUTH_LOGOUT":
            return {loading: false, data: {"user_id": null, "firstName": null, "token": null }, error: null, isLogin: false}
        default:
            return state
    }
}

export default Fetch