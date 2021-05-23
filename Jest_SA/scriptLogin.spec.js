const {login} = require('./scriptLogin')

describe('scriptLogin',() => {
    it('Should not be null',() => {
        expect(login.jestEmailLogin).not.toBeNull(login.jestEmailLogin);
    });

    it('Should be undefined',() => {
        expect(login.senhaLogin).toBeUndefined(login.senhaLogin);
    });
});