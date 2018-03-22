export default function (state={},action){
    switch(action.type){
        case 'GET_DATA' :
         let state1 ={
                payload:action.payload}
              return state1 ;
         case 'GET_ONE' :
            let state2 ={
                 success:true,
                payload:action.payload }
              return state2 ;
                   
       
    }
    return state;
}
