const initialState = {
    loading: false,
    data:{
        results:[]
    },
    token:null
    
}

const Fetch = (state=initialState, action={})=>{
    switch(action.type){
        case "POST_MOVIES_REQUEST":
            return{...state, loading:true}
        case "POST_MOVIES_ERROR":
            return{...state, loading:false, error: action.payload}
        case "POST_MOVIES_SUCCESS":
            return{...state, loading:false, data: action.token}
        default:
            return state
    }
}

export default Fetch