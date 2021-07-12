// import jwt_decode from "jwt-decode";

// const storage =()=> {
//     if(localStorage.getItem('token') === null) {
//         // return null
// console.log(null);

//     } else { return localStorage.getItem('token')}}
// console.log(storage);
// const token = localStorage.getItem('token');
// const decoded =()=> {if(token) {return jwt_decode(token).name}}

//  const usertoken = decoded


export const initialState = {
    // user: localStorage.getItem('name'),
    user: null,

    Admin: localStorage.getItem('Admin'),
};
// console.log("REDUCER " + initialState.user);

 function reducer(state,action){
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
       
        default:
            return state;
    }
}

export default reducer;