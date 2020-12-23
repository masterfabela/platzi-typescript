// Crear una fotografia
/*
function createPicture(title, date, size){}
*/


type SquareSize = '100x100' | '500x500' | '1000x1000'

/*
// Usamos TS, definimos tipos para parametros
function createPicture(title:string, date:string, size?:SquareSize){
  // Se crea la fotografia
  console.log('Create picture using', title, date, size);
}

createPicture('My Birtday', '2020-03-10', '500x500');
createPicture('Colombia Trip', '2020-03');
*/

// Parametros opcionales en funciones
function createPicture(title?:string, date?:string, size?:SquareSize){
  // Se crea la fotografia
  console.log('Create picture using', title, date, size);
}

createPicture('My Birtday', '2020-03-10', '500x500');
createPicture('Colombia Trip', '2020-03');
createPicture('Colombia Trip');
createPicture();

// Flat array functions
let createPic = (title: string, date: string, size: SquareSize):object => {
  return {
    title,
    date,
    size
  }
}

const picture = createPic('Platzi session', '2020-03-10', '100x100');
console.log('Picture', picture);

// Tipo de retorno con Typescript
function handleError(code: number, message:string): never | string {
  // Procesamiento del codigo, mensaje
  if (message === 'error') {
    throw new Error(`${message}. Code error: ${code}`)
  } else {
    return 'An error has ocurred';
  }
}

try{
  let result = handleError(200, 'OK'); // string
  console.log('result: ',result);
  result = handleError(404, 'error'); // never
  console.log('result: ',result);
} catch(error){

}