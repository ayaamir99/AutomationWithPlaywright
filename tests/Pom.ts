import {Locator  , Page} from '@playwright/test'
// creating class
export class LoginPage{
    public readonly emaillocator : Locator
    public readonly passwordlocator : Locator
    public readonly SignInButtonlocator : Locator

    constructor (page: Page){
        this.emaillocator =page.getByRole("textbox",{name:"Email"})
        this.passwordlocator =page.getByRole("textbox",{name:"Password"})
        this.SignInButtonlocator =page.getByRole("button",{name:"Email"})

    }
}