const Reducer = (state, action) => {
    switch(action.type) {
        case "Login_Successful":
         return{
            user: action.payload,
         }
         case "Login_Fail":
         return{
            user: null,   
    }
    case "Logout":
         return{
            user: null,
         }
         default:
            return state;
    }
}
export default Reducer