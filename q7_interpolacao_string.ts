/* Utilizando Interpolação de Expressões, nada mais é do que
Template Strings: strings que permitem expressões embutidas. Com
isso, você pode utilizar string-multilinhas e interpolação de
string com elas */

let a: string = 'Ely';
const b: number = 120.56;
let c: string = 'TypeScript';

console.log(`${'Ely'} + 
             ${'My payment time is'} + 120.56 +
               'and'
               'my preffered language is' + ${'TypeScript'}`);
