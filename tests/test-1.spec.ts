import { test } from '@playwright/test';
import { Entry } from './Entry';
 
const sql = require('mssql');

test('test', async ({ page })   =>   {
  // Increase timeout for slow operations
  page.setDefaultTimeout(150000);

  const Udata = new Entry ('Phy','123456');
 
  console.debug('................'+ Udata.getUserName ()+'' +Udata.getUserPass());


  await page.goto('http://backoffice-systemtest.andalusiagroup.net:8090/');
  await page.waitForURL('http://backoffice-systemtest.andalusiagroup.net:8090/');
  page.getByText('Login');

  await page.locator("//input[@id='userName']").click();
  await page.locator("//input[@id='userName']").fill(Udata.getUserName ());
  await page.locator("//input[@id='userName']").press('Tab');

  await page.locator("//input[@id='password']").fill(Udata.getUserPass());
  await page.locator("//input[@id='password']").press('Tab');

  //await page.getByRole('button', { name: 'Login' }).press('Enter');

  await page.locator("button[type='submit']").press('Enter');
  //await page.click("[id='next']");

  await page.waitForURL('http://backoffice-systemtest.andalusiagroup.net:8090/dashboard');
  
  page.getByText(' Welcome To DotCare!');
  page.getByText(Udata.getUserName(), { exact: true });


  //await page.locator('#profile-dropdown-right__BV_toggle_').click();
  //test.slow();
  
 // await page.getByRole('menuitem', { name: 'Logout' }).click();

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

    const result = await sql.query`SELECT top 1 * from finance.Contractor c ORDER BY c.ID DESC`;
    console.debug(result.recordset);
     // Log the result data
  } //end try

  catch (err) 
  {
    console.debug(err);
    // ... error checks
  }//end catch


  //page.close();

  
  
});
