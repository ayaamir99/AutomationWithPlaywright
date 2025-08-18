import {test  , expect} from '@playwright/test'
import { LoginPage } from './page_objects/Pom'
import exp from 'constants';
import { url } from 'inspector';
 test("user should be able to login",async({page})=>{
    const loginpage = new LoginPage(page);
        await page.goto("https://binaryville.com/")
        await loginpage.emaillocator.fill('test@example.com')
        await loginpage.passwordlocator.fill('pass123')
        await loginpage.SignInButtonlocator.click
        expect(page.url).toContain('pass123')


 })
