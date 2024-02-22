/// <reference types="cypress" />

import { userType } from "../../support/Login";

describe('Cypress', () => {
  beforeEach(() => {
    cy.visit('http://172.31.1.20:9999/#/auth/login');
  }); 
it('Login with JS class', () => {
    const user1=new userType('nagarik','nagarik1');
    user1.asUserTypeLogin();
});
});