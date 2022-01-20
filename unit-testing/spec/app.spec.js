import { helloName } from '../app';

//const helloName = require('../app').helloName;

it('La función saluda', () => {
  expect(helloName('Platzi')).toBe('Hola Platzi');
});