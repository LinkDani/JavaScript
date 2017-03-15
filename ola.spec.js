const code =require('code');
const Lab =require('lab');
const lab =exports.lab =Lab.script();
const {BemVindo} =require('./ola.js');
Lab.test('verifica', function(done)){
code.expect(BemVindo('Mario')), to.equal('May The Force Be With You Mario');
}
