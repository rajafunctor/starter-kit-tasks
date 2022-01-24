import { aliasQuery } from '../../utils/graphql_test';

describe('List Lives Test', () => {
    beforeEach(() => {
        cy.intercept('POST', 'http://localhost:3000/graphql', req => {
            aliasQuery(req, 'getLife');
            req.reply({ fixture: 'viewLife.json' });
        });
    });

    it('Should display title of life', () => {
        cy.visit('http://localhost:3000/lives/61ea25cdfbaa815941cb1c0e/life');
        cy.wait('@gqlgetLifeQuery');
        cy.get('.ant-descriptions-title').should('contain', 'Raju');
    });

    it('Show display back to lives button', () => {
        cy.get('.ant-btn.ant-btn-primary').should('contain', 'Back to Lives');
    });
});