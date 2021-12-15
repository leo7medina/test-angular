#Ejecucion de test

node app.spec.js


Jasmine es un framework de Desarrollo dirigido por comportamientos (Behavior Driven Development) para realizar nuestras pruebas unitarias con JavaScript.

Puede ser ejecutado en el navegador pero también podemos usar un headless browser para automatizar mejor las pruebas. Por ejemplo, con PhantomJS, CasperJS o ZombieJS.

Tampoco necesitamos un DOM; por lo que, es posible hacer pruebas en cualquier Javascript Engine como Rhino o V8 (como Node.js).

¿Cómo funciona?

Las funciones principales de Jasmine para hacer pruebas son las siguientes:

describe(a, b) donde “a” es la descripción de nuestra suite y “b” la función anónima donde se incluirá toda la suite o serie de especificaciones.
it(a, b) donde “a” es la descripción de la especificación y “b” la función anónima donde se incluirán las expectativas (expectations) que debe cumplir la aplicación.
expect(a) donde “a” es un valor que será probado, mediante argumentos en cadena (method chaining). Por ejemplo: expect(true).not.toBe(false).
beforeAll(a) donde “a” será la función que se ejecutará antes de iniciar las pruebas.
afterAll(a) donde “a” será la función que se ejecutará después de iniciar las pruebas.
beforeEach(a) donde “a” será la función que se ejecutará antes de cada prueba.
afterEach(a) donde “a” será la función que se ejecutará después de cada prueba.