import { aliasQuery } from '../../utils/graphql_test';

console.log(Cypress.env());

describe('List Lives Test', () => {
    beforeEach(() => {
        cy.intercept('POST', '/graphql', req => {
            aliasQuery(req, 'getListLives');
            req.reply({ fixture: 'listLives.json' });
        });
    });

    it('Should have display list of records', () => {
        cy.visit('/lives');
        cy.wait('@gqlgetListLivesQuery');
        cy.get('.lifeRecordWrapper').should('have.length', 10);
    });

    it('Show display create and view buttons', () => {
        cy.get('#createLife').should('contain', 'Create a life');
        cy.get('.lifeRecordWrapper').first().find('.viewLife').should('contain', 'View Life');
    });
});
