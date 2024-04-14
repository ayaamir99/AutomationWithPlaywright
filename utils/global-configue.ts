/* login using Browser ***************************** */
// import { chromium , expect } from '@playwright/test'
// async function global_configue() {
//     const browser = await chromium.launch();
//     const page = await browser.newPage();
//     await page.goto("https://qacart-todo.herokuapp.com/");

//     await page.locator('#email').fill("ayaamir457@gmail.com");
//     await page.locator('[data-testid="password"]').fill("74108520");
//     const LoginButton = await page.locator('button:has-text("Login")');
//     await LoginButton.click();  

//     const welcomeMessage = page.locator('[data-testid="welcome"]');
//     await expect(welcomeMessage).toBeVisible();

//     await page.context().storageState({
//         path : "storageState.json"
//     });
    
// }

// export default global_configue;
/* login using API request ***************************** */
 import {  request } from '@playwright/test'
 async function global_configue() {

    const requestContext  = await request.newContext();
    await requestContext.post("https://qacart-todo.herokuapp.com/api/v1/users/login",{
        data : 
        {
            email : "ayaamir457@gmail.com",
            password : "74108520"
        },
    },
    );
    await requestContext.storageState({
        path  :"storageStateAPI.json",
    });

//     await page.context().storageState({
//         path : "storageState.json"
//     });
    
}
export default global_configue;
