export const userConstants = {
     request:(values)=>{
         console.log("entering user const ....again");
         return {
             type:"REGISTER_USER",
             payload:values
        }

     }

     
};