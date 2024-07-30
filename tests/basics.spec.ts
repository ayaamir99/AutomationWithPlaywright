import {test , expect} from '@playwright/test'
test.describe("Login test  cases", ()=> {

    test("user open website", async({page})=> {
        await page.goto("https://qacart-todo.herokuapp.com/");
        // const title = await page.title();
        // console.log(title);
        await expect(page).toHaveTitle("QAcart Todo App - Login page");
    });

    test("slould be able to login to website", async({page})=> {
        await page.goto("https://qacart-todo.herokuapp.com/login");
        //await page.waitForURL("/login");
        // find element by css selector
        const email = await page.locator('#email');
        await email.fill("ayaamir457@gmail.com"); 
        await expect(email).toHaveValue("ayaamir457@gmail.com");
        // find element by css selector
        //const password = await page.locator('[data-testid="password"]');
        //await password.fill("123456"); 
        await page.locator('[data-testid="password"]').fill("74108520");
        const submitButton = await page.locator('button:has-text("Login")');
        await submitButton.click(); 
        await expect(page).toHaveTitle("QAcart Todo App - Todos page",{
            timeout  : 6000,
        });
 
        
    });






    // test.beforeAll(() => {
    //     console.log("new 0123 ")
    // })
    // test("should have the correct title 1 ", async()=> {
    //     console.log("i am inside test case 1 ")
    // });


        // test("header should be visible by text1", async({page})=> {
    //     await page.goto("https://qacart-todo.herokuapp.com/");
    //     const header = await page.locator("text=LOGIN TO APPLICATION");
    //     console.log(header);
    //     await expect(header).toBeVisible();
      
    // });
    // test("header should be visible by text2", async({page})=> {
    //     await page.goto("https://qacart-todo.herokuapp.com/");
    //     // find element by css selector
    //     const header = await page.locator('.header');
    //     console.log(header);

    //     //await expect(header).toHaveText("LOGIN TO APPLICATION");
      
    // });

});
