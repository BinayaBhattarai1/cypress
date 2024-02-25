import loginPage from "../../support/Login2";

describe('Verify Login', () => {
    beforeEach(() => {

        cy.visit('http://172.31.1.20:9999/#/auth/login');
    
      }); 
      it('Verify Successful Login', () => {
        const loginObj = new loginPage();
        loginObj.enterUsername('nagarik');
        loginObj.enterPassword('nagarik');
        loginObj.clickSubmit();
      });
      it('Verify Invalid Login', () => {
        const loginObj = new loginPage();
        loginObj.enterUsername('nagarik');
        loginObj.enterPassword('nagarik1');
        loginObj.clickSubmit();
      });
});