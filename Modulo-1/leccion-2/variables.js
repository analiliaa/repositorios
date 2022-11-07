const instructor = "Ana";
// VAR -LET -CONST 
// Las variables declaradas con var pueden ser reasignadas y redeclaradas.
//Su alcance es global sin importar el ámbito del bloque.

//let
//Las variables declaradas con let pueden ser reasignadas pero no redeclaradas.
//Su alcance es local al bloque, declaración o expresión donde se está usando.

//const
//Las variables declaradas con const no pueden ser reasignadas ni redeclaradas.
//Su alcance es local al bloque, declaración o expresión donde se está usando.

const edad = 16

if (edad >= 18) {
    console.log('Eres mayor de edad')
} else if (edad >= 13) {
    console.log('Eres un adolescente')
} else {    
    console.log('Eres un niño')
}   

