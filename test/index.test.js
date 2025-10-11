const hash = require('../test/testindex');

test('Prueba unitaria para la función hash', () => {
  const message = 'Contraseña';
  const hashtest = hash(message);
  expect(hashtest).toEqual('a389a638dec32538f55b0c8dc5c84f84aad65bcd5aacd5f05d36f30b71271a6b');
});