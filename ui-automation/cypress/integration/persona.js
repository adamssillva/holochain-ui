const should = require('should');
const addContext = require('mochawesome/addContext');

it('should have context', function () {
  (1+1).should.equal(2);
  addContext(this, {
        title: 'How I Feel When Tests Fail',
        value: 'http://i.imgur.com/c4jt321.png'
      });
});

describe('How to work with Personas', function () {
  it('Add a new Personal persona by clicking the Add button', function () {
    cy.visit('/holo-vault/persona/new')
    cy.title().should('eq', 'Holochain')
    cy.get('input[name="personaName"]').type('Personal', { delay: 25 })
    cy.log('Fill out the name you want to refer to this Persona as')
    cy.get('button[name="addField"]').click()
    cy.log('Click the Add Field button to start adding your information')
    cy.get('input[name="fieldName0"]').type('firstName', { delay: 25 })
    cy.log('Fill out the field name such as "firstName"')
    cy.get('input[name="fieldValue0"]').type('Phil', { delay: 25 })
    cy.log('and a value such as "Phil"')
    cy.get('button[name="addField"]').click()
    cy.get('input[name="fieldName1"]').type('lastName', { delay: 25 })
    cy.log('Fill out the field name such as "lastName"')
    cy.get('input[name="fieldValue1"]').type('Beadle', { delay: 25 })
    cy.log('and a value such as "Beadle"')
    cy.get('button[name="addField"]').click()
    cy.get('input[name="fieldName2"]').type('address', { delay: 25 })
    cy.get('input[name="fieldValue2"]').type('123 Holochain Road', { delay: 25 })
    cy.get('button[name="addField"]').click()
    cy.get('input[name="fieldName3"]').type('suburb', { delay: 25 })
    cy.get('input[name="fieldValue3"]').type('Burwood', { delay: 25 })
    cy.get('button[name="addField"]').click()
    cy.get('input[name="fieldName4"]').type('city', { delay: 25 })
    cy.get('input[name="fieldValue4"]').type('Melbourne', { delay: 25 })
    cy.get('button[name="submitPersona"]').click()
    cy.log('Click the Create Persona button to save into your private data.')
    cy.wait(500)
  })
  it('Add a new Work persona by clicking the Add button', function () {
    cy.visit('/holo-vault/persona/new')
    cy.title().should('eq', 'Holochain')
    cy.get('input[name="personaName"]').type('Work', { delay: 25 })
    cy.log('Fill out the name you want to refer to this Persona as')
    cy.get('button[name="addField"]').click()
    cy.log('Click the Add Field button to start adding your information')
    cy.get('input[name="fieldName0"]').type('firstName', { delay: 25 })
    cy.log('Fill out the field name such as "firstName"')
    cy.get('input[name="fieldValue0"]').type('Philip', { delay: 25 })
    cy.log('and a value such as "Phil"')
    cy.get('button[name="addField"]').click()
    cy.get('input[name="fieldName1"]').type('lastName', { delay: 25 })
    cy.log('Fill out the field name such as "lastName"')
    cy.get('input[name="fieldValue1"]').type('Beadle', { delay: 25 })
    cy.log('and a value such as "Beadle"')
    cy.get('button[name="addField"]').click()
    cy.get('input[name="fieldName2"]').type('role', { delay: 25 })
    cy.get('input[name="fieldValue2"]').type('Engineer', { delay: 25 })
    cy.get('button[name="addField"]').click()
    cy.get('input[name="fieldName3"]').type('location', { delay: 25 })
    cy.get('input[name="fieldValue3"]').type('Melbourne', { delay: 25 })
    cy.get('button[name="submitPersona"]').click()
    cy.log('Click the Create Persona button to save into your private data.')
    cy.wait(500)
  })
  it('Add a new Friends persona by clicking the Add button', function () {
    cy.visit('/holo-vault/persona/new')
    cy.title().should('eq', 'Holochain')
    cy.get('input[name="personaName"]').type('Friends', { delay: 25 })
    addContext(this, 'Fill out the name you want to refer to this Persona as')
    cy.get('button[name="addField"]').click()
    cy.log('Click the Add Field button to start adding your information')
    cy.get('input[name="fieldName0"]').type('nickName', { delay: 25 })
    cy.log('Fill out the field name such as "nickName"')
    cy.get('input[name="fieldValue0"]').type('@philt3r', { delay: 25 })
    cy.log('and a value such as "@philt3r"')
    cy.log('Add as many fields as you like')
    cy.get('button[name="addField"]').click()
    cy.get('input[name="fieldName1"]').type('hobby', { delay: 25 })
    cy.get('input[name="fieldValue1"]').type('DJ', { delay: 25 })
    cy.get('button[name="submitPersona"]').click()
    cy.log('Click the Create Persona button to save into your private data.')
    cy.wait(500)
  })
})
