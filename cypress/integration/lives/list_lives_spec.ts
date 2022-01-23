import { aliasQuery } from '../../utils/graphql_test';

describe('List Lives Test', () => {
    beforeEach(() => {
        cy.intercept('POST', 'http://localhost:3000/graphql', req => {
            aliasQuery(req, 'getListLives');
            req.reply({ fixture: 'listLives.json' });
        });
    });

    it('Should have display list of records', () => {
        cy.visit('http://localhost:3000/lives');
        cy.wait('@gqlgetListLivesQuery');

        cy.get('.lifeRecordWrapper').should('have.length', 10);
    });

    it('Show display create and view buttons', () => {
        cy.get('#createLife').should('contain', 'Create a life');
        cy.get('.lifeRecordWrapper').first().find('.viewLife').should('contain', 'View Life');
    });
});
