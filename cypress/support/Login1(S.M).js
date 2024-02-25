export class userType{
  
    constructor(username,password){
        this.username=username;
        this.password=password;
    }
    asUserTypeLogin(){
        cy.visit('http://172.31.1.20:9999/#/')

        cy.get('.ng-pristine').eq(1).should('exist');
        
        cy.get('.ng-pristine').eq(1).type(this.username);
    
        cy.get('.input-group > .form-control');
        cy.get('.input-group > .form-control').type(this.password);

        cy.get('.btn-primary').click()
    }
}