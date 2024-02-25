class loginPage {
    // create an object named 'elements'
 elements = {   // defining elements using arrow functions
    usernameInput:    () => cy.get('.ng-pristine').eq(1),
    passwordInput:() => cy.get('.input-group > .form-control'),
    loginBtn:     ()=>cy.get('.btn-primary')
 }
 enterUsername(username){
    this.elements.usernameInput().clear();
    this.elements.usernameInput().type(username);
 }
 enterPassword(password)
 {
     this.elements.passwordInput().clear();
     this.elements.passwordInput().type(password);
 }

 clickSubmit() {
     this.elements.loginBtn().click();
 }
}
export default loginPage;