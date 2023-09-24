  class Entry {


  private Uname: string;
  private UPass: string;
  
  public constructor  (Uname: string,UPass:string)
  {
    this.Uname=Uname;
    this.UPass=UPass;
  }

  public getUserName()
  {
    return this.Uname;    
  }

  public setUserName(UserName: string)
  {
    this.Uname=UserName;
  }

  public getUserPass()
  {
    return this.UPass;    
  }

  public setUserPass(UserPass: string)
  {
    this.UPass=UserPass;
  }

  

};
//entry
export {Entry};

 