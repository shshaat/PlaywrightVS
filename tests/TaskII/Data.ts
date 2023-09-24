export class ConfigData{
  systemtest(systemtest: any) {
    throw new Error('Method not implemented.');
  }

Windowsusername:string= 'shabaan.shaat';
Windowspassword:string= '8885600';
Windowsdomain:string= 'http://backoffice-systemtest.andalusiagroup.net:1500/SercurityService/api/security/login';
WindowsMechanism: String='BASIC_DIGSET'


 //----------------------------------------------------------------------------------

    /// URL

Uname: string='phy';
Upass: string='123456';
MedPort:string = '8090';
SystemURL:string="http://backoffice-systemtest.andalusiagroup.net:"+this.MedPort;
DashURL:string="http://backoffice-systemtest.andalusiagroup.net:"+this.MedPort+'/dashboard';

//-----------------------------------------------------------------------------


/// Login Locators
 SystemUserName :string="//input[@id='userName']";
 SystemUserPassword :string="//input[@id='password']";
 SystemLogInBtn:string="button[type='submit']"
//-----------------------------------------------------------------------------

/// Cost Center Locators
 AddEditNewCostCenterCode:string="//input[@name='Code']";
 AddEditNewCostCenterEname:string="//input[@name='EnName']";
 AddEditNewCostCenterArame:string="//input[@name='ArName']";
 FilterCostCenterEnName:string="//input[@aria-label='English Name']";
toasterS: string = "div[class='k-notification-content'] p"



};