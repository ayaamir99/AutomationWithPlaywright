import {test , expect} from '@playwright/test'
test("user should be able to login using API",async({request})=>{

  const response =  await  request.post("https://qacart-todo.herokuapp.com/api/v1/users/login",{
        
        data : 
        {
            email : "ayaamir457@gmail.com",
            password : "74108520"
        },
    })
    console.log(await response.json());
});
