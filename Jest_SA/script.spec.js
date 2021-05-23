const {valida} = require('./script')

describe('script.js', () => {
    it('should not be 0', () => {
        expect(valida.nome).not.toBe(0);
    });

    it('should be undefined', () => {
        expect(valida.senha).toBeUndefined(valida.senha);
    });

    it('should be equal', () => {
        let senhaTest = valida.senhaConfirmar;
        expect(valida.senhaConfirmar).toEqual(senhaTest);
    });

    it('should match email', () => {
        expect(valida.jestEmail).not.toBeNull(valida.jestEmail);
    });
});