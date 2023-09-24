

import { test, expect,Page, request, APIResponse } from '@playwright/test';
import { Entry } from '../Entry';
import { PageL } from './PL.pages';
import { ConfigData } from './Data';
//import { NtlmClient } from 'ntlm-client' // plz install --> npm install ntlm-client


let page:Page;
let Lc = new PageL;
let CD =new ConfigData;
const Udata = new Entry (CD.Uname,CD.Upass);
const RandomTxt = Math.random().toString(36).substring(2,9);
const sql = require('mssql');

test.beforeEach() => {
  await page.goto(Lc.SystemURL);

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

});

test('BulkDischarge', async({page}) => {
  // Go to the starting url before each test.

  await page.getByRole('link').nth(1).click();
  await page.getByRole('link', { name: 'Finance' }).click();
  await page.getByRole('link', { name: 'Bulk Discharge' }).click();

 // await page.frameLocator('#right-panel iframe').getByText('Patients Visits').click();
  page.getByText('Visits History', { exact: true });
  

});



/*




test('AddCostCenter', async({page}) => {

  await page.getByRole('link').nth(1).click();
  await page.getByRole('link', { name: 'Finance' }).click();
  await page.getByRole('link', { name: 'Cost Centers' }).click();
  test.slow();
  page.getByText('Cost Centers', { exact: true });
  
  await page.getByRole('button', { name: ' New Cost Center' }).click();
  
  await page.locator(Lc.AddEditNewCostCenterCode).click();
  await page.locator(Lc.AddEditNewCostCenterCode).fill('Test-'+RandomTxt);
  await page.locator(Lc.AddEditNewCostCenterCode).press('Tab');
  
  await page.locator(Lc.AddEditNewCostCenterEname).fill('TestCostCenter-'+RandomTxt);
  await page.locator(Lc.AddEditNewCostCenterEname).press('Tab');
  
  
  await page.locator(Lc.AddEditNewCostCenterArame).fill('TestCostCenter-'+RandomTxt+' عربي');
  
  await page.getByRole('button', { name: ' Update' }).click();
  
  await page.locator(Lc.FilterCostCenterEnName).click();
  await page.locator(Lc.FilterCostCenterEnName).fill('TestCostCenter-'+RandomTxt);
  await page.locator(Lc.FilterCostCenterEnName).press('Enter');
test.slow();
page.getByText('TestCostCenter-'+RandomTxt, { exact: true });



const toast= page.locator(Lc.toasterS); ///-->  Lc.toasterS="div[class='k-notification-content'] p"
await toast.waitFor({state: "visible"});
expect (toast).toHaveText('Saved Successfully');
await toast.waitFor({state: "hidden"});


});

test('EditCostCenter', async({page}) => {

  
  await page.getByRole('link').nth(1).click();
  await page.getByRole('link', { name: 'Finance' }).click();
  await page.getByRole('link', { name: 'Cost Centers' }).click();
  page.getByText('Cost Centers', { exact: true });

  await page.getByRole('button', { name: 'Edit' }).first().click();
  
  await page.locator(Lc.AddEditNewCostCenterCode).click();
  await page.locator(Lc.AddEditNewCostCenterCode).fill('Test-'+RandomTxt+' Edited');
  await page.locator(Lc.AddEditNewCostCenterCode).press('Tab');
  
  await page.locator(Lc.AddEditNewCostCenterEname).fill('TestCostCenter-'+RandomTxt+' Edited');
  await page.locator(Lc.AddEditNewCostCenterEname).press('Tab');
  
  
  await page.locator(Lc.AddEditNewCostCenterArame).fill('TestCostCenter-'+RandomTxt+' عربي'+' Edited');
  
  await page.getByRole('button', { name: ' Update' }).click();
  
  await page.locator(Lc.FilterCostCenterEnName).click();
  await page.locator(Lc.FilterCostCenterEnName).fill('TestCostCenter-'+RandomTxt+' Edited');
  await page.locator(Lc.FilterCostCenterEnName).press('Enter');
  test.slow();
  page.getByText('TestCostCenter-'+RandomTxt, { exact: true });
  });

  test('DeleteCostCenter', async({page}) => {
  
    await page.getByRole('link').nth(1).click();
    await page.getByRole('link', { name: 'Finance' }).click();
    await page.getByRole('link', { name: 'Cost Centers' }).click();
    page.getByText('Cost Centers', { exact: true });
  
    await page.getByRole('button', { name: 'Delete' }).first().click();
    
    //page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Yes' }).click();


try 
{
  // Disable SSL certificate validation for testing (not recommended for production)
  await sql.connect({
    server: 'aws-systest-01\\mssqlserver19',
    port: 1433,
    database: 'System.Test.Env.HCMS.Main',
    user: 'readuser',
    password: 'readpass',
    encrypt: false,
    options: {
      trustServerCertificate: true,
    },
  });

  const sqlQuery = `SELECT TOP 1 cc.IsDeleted from finance.CostCenter cc WHERE cc.EnName LIKE '%TestCostCenter-${RandomTxt} Edited%' ORDER BY cc.ID DESC`;

  const sqlresult = await sql.query(sqlQuery);

  
  expect(sqlresult.recordset). toEqual([{ IsDeleted: true }]);

  console.debug(sqlresult.recordset);

   // Log the result data
} //end try

catch (err) 
{
  console.debug(err);
  // ... error checks
}//end catch

    }); // delete costcenter
 
    
    test('api test', async ({request}) => {
      const TestURL = "https://disqus.com/api/3.0/forums/details?forum=koooora&attach=forumFeatures&api_key=E8Uh5l5fHZ6gD8U3KycjAIAk46f68Zw7C6eW8WSjZvCLXebZ7p0r1yrYDrLilk2F";
      const response = await request.get(TestURL);
      const statusCode = response.status(); //get the status code
     // expect(response.status()).toBe(200);
      console.debug('The Response Status --> '+statusCode);
      const responseBody = JSON.parse(await response.text());
      console.debug(responseBody);
      console.debug('ResponseBody with Name --> '+responseBody.response.twitterName); // using responseBody. you can do jsonpath to validate the value in the response
      });



/*
      test('DotCare api test', async ({request}) => {
        const ntlmClient = new NtlmClient({
          username: Lc.Windowsusername,
          password: Lc.Windowspassword,
          Domain:Lc.Windowsdomain
        });

        async function performNtlmAuthentication(page: Page, credentials: any) {
          const ntlmClient = new NtlmClient(credentials);
        
          await ntlmClient.authenticate();
        }

        await performNtlmAuthentication(page,ntlmClient);

        
       /* 
        const TestURL = Lc.SystemURL+"/Finance.Service/odata/CostCenterOData?&$count=true&%24format=json&%24top=10&%24orderby=ID%20desc";
        const response = await request.get(TestURL);
        const statusCode = response.status(); //get the status code
        expect(response.status()).toBe(200);
  
        console.debug('The Response Status --> '+statusCode);
        const responseBody = JSON.parse(await response.text());
        console.debug(responseBody);
        console.debug('ResponseBody with Name --> '+responseBody.response.TestURL); // using responseBody. you can do jsonpath to validate the value in the response

        
        });
  */

        test.afterAll(async ({page}) => {  await page.close();}  );

 