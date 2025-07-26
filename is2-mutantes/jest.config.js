module.exports = {
  testEnvironment: 'node', // o 'jsdom' si estás trabajando con aplicaciones web
  collectCoverage: true, // Habilita la recopilación de cobertura
  collectCoverageFrom: [
    'src/codigo/*.js', // Especifica los archivos de los que deseas recopilar cobertura
    '!src/index.js', // Excluye archivos específicos si es necesario
  ],
  coverageDirectory: 'reports/coverage', // Directorio donde se guardará el informe de cobertura
  coverageReporters: ['text', 'lcov'], // Formatos de informe de cobertura
};
