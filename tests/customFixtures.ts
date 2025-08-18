import {test as base  , expect} from '@playwright/test'
// custom fixture
const test = base.extend({
    testData : async({},use) => {
        const data ={email : "ayaamer@test.com", password:"74108520"
        }
        await use(data)
    }
    //call back function => use
    ,authenticatedUser : [async({page,testData},use)=>{
    await page.goto("10.10.0.18");
    const emailInput = page.getByRole("textbox",{name:"Email"});
    await emailInput.fill(testData.email)
     const passwordInput = page.getByRole("textbox",{name:"Password"});
    await passwordInput.fill(testData.password)
     const SignInButton = page.getByRole("button",{name:"Sign In"});
    await SignInButton.click()

    await use{page}
    },{auto: true}]
// to tell code that is automatic fixture
    
})
test("should able to login",async({page,testData}) =>{
    await page.goto("10.10.0.18");
    const emailInput = page.getByRole("textbox",{name:"Email"});
    await emailInput.fill(testData.email)
     const passwordInput = page.getByRole("textbox",{name:"Password"});
    await passwordInput.fill(testData.password)
     const SignInButton = page.getByRole("button",{name:"Sign In"});
    await SignInButton.click()
}
)