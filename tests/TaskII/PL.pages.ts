import { Page ,Locator} from '@playwright/test';
import { ConfigData } from './Data';

export class PageL{
//
readonly page:Page;
readonly CD:ConfigData;
readonly uName:Locator;
readonly unPass:Locator;
readonly LoginBtn:Locator;

constructor (page)
{
    this.page=page;
    this.uName= page.locator(this.CD.SystemUserName);
    this.unPass= page.locator(this.CD.SystemUserPassword);
    this.LoginBtn= page.locator(this.CD.SystemUserName);

}//constractor


async goto() {
    await this.page.goto(this.CD.SystemURL);
}






/*await page.goto(Lc.SystemURL);

  await page.waitForURL(Lc.SystemURL);
  page.getByText('Login');

  await page.locator(Lc.SystemUserName).click();
  await page.locator(Lc.SystemUserName).fill(Udata.getUserName ());
  await page.locator(Lc.SystemUserName).press('Tab');

  await page.locator(Lc.SystemUserPassword).fill(Udata.getUserPass());
  await page.locator(Lc.SystemUserPassword).press('Tab');

  //await page.getByRole('button', { name: 'Login' }).press('Enter');

  await page.locator(Lc.SystemLogInBtn).press('Enter');
  //await page.click("[id='next']");

  test.slow();

  await page.waitForURL(Lc.DashURL);
  
  page.getByText(' Welcome To DotCare!');
  page.getByText(Udata.getUserName(), { exact: true });
*/

};     