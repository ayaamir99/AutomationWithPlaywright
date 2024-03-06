import {test} from '@playwright/test'
test.describe("Login test  cases", ()=> {
    test.beforeAll(() => {
        console.log("new 0123 ")
    })
    test("should have the correct title 1 ", async()=> {
        console.log("i am inside test case 1 ")
    });
    test("should have the correct title 2", async()=> {
        console.log("i am inside test case 2 ")
    });
});
