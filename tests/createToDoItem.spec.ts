import {test , expect} from '@playwright/test'

test.describe("ToDo Page",()=>{
    test.use({
        storageState :"storageStateAPI.json"
    });
    test.beforeEach(async({page})=>{
        await page.goto("https://qacart-todo.herokuapp.com/login");

    });
    test("user should be able to mark a todo as completed",async({page})=>{

        await page.locator('[data-testid="add"]').click();
        await page.locator('[data-testid="new-todo"]').fill("selenium");

        await page.locator('[data-testid="submit-newTask"]').click();

        await page.locator('[data-testid="complete-task"]').nth(0).click();
        const todoItem = await page.locator('[data-testid="todo-item"]').nth(0);
        await expect(todoItem).toHaveCSS("background-color","rgb(33, 76, 97)");
 
    });
    test("welcome message should be displayed",async({page})=>{

        const welcomeMessage = page.locator('[data-testid="welcome"]');
        await expect(welcomeMessage).toBeVisible();
 
    });


});