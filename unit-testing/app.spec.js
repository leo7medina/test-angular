const it = require('./framework').it;
const expect = require('./framework').expect;
const hello = require('./app');


it('La funcion saluda', () => {
    expect(hello('Leonardo')).toBe('Hola Leonardo');
});