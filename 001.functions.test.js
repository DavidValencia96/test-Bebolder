const { TestClass } = require("./testClass"); 
const { test, expect, fit, describe, beforeAll, beforeEach, afterAll }  = require("@jest/globals");


// tecnica AAA

// describe :: permite agrupar pruebas & fdescribre :: obliga a solo ejecutar esa prueba
describe('grupo-001', () =>{
    test.only('test-001', () => {
    
        // Arrange
        let objt1 = {
            name: 'jhon'
        };

        // let objt2 = objt1;

        let objt2 = {
            name: 'jhon'
        };

        // Act
    
        // Assert
        expect(objt1).toEqual(objt2) // comparar datos de un array
    })
})


describe('grupo-002', () => {
    // fit :: obligamos a que se ejecute solo esa prueba e ignorar el resto 
    fit('fit', () => {
        // tecnica AAA

        // Arrange
        let mynumber = 2;

        // Act

        // Assert
        expect(mynumber).toBe(2)
    })

    // test.only  == fit
    test.only('test.only', () => {
        // tecnica AAA

        // Arrange
        let mynumber = 2;
        // Act

        // Assert
        expect(mynumber).toBe(2)
    })
})


// Validar datos u objetos de un array
describe('grupo-003', () =>{
    test.only('test-grupo-003-1', () => {
    
        // Arrange
        let myArray  = [1, 2, 3]

        // Act
    
        // Assert
        expect(myArray).toContain(2) // validar que contenga el valor indicado
    })


    
    let myArray1  = [1, 2, 3,]

    test.only('test-grupo-003-2', () => {
    
        // Arrange
        

        // Act
    
        // Assert
        expect(myArray1).not.toContain(20) // validar que no contenga el valor indicado || negacion
    })
})


// comparar datos de un array y validar que contenga el mismo tipo de datos
describe('grupo-004', () =>{
    test.only('test-grupo-004-1', () => {
    
        // Arrange

        let myArray3 = [ 
            objt1 = {
                name: 'jhon'
            },

            objt2 = {
                name: 'jhon2'
            }
        ]

        let objt3 = {
            name: 'jhon'
        }

        // Act
    
        // Assert
        expect(myArray3).toContainEqual(objt3) // comparar datos de un array y validar que contenga el mismo tipo de datos
    })
})


// try catch excepciones
function myCustomError(data) {
    // throw new Error('Aqui va el error');
    throw new Error(`Mi error personalizado: ${data}`);
}

// function controlError(){
//     try {
//         myCustomError()
//     } catch (error) {
//         console.error(error); // Así no deberia de ponerse

//         throw new Error(error.message); // manera correcta 
//     }
// }

describe('grupo-005', () =>{
    test.only('test-grupo-005-1', () => {
    
        // Arrange
        let data = 'Mi dato'

        // Act
    
        // Assert
        // expect(() => {myCustomError()}).toThrowError(new Error('Aqui va el error')); // capturar y comprar el objeto de error
        expect(() => {myCustomError(data)}).toThrowError(new Error(`Mi error personalizado: ${data}`)); // capturar y comprar el objeto de error
    })
})



// setup teardown || limpieza de datos
describe('grupo-006', () =>{
    let testClass;

    // se ejecuta una unica vez
    beforeAll(() => {
        testClass = new TestClass();
        // testClass.setData()
    })

    // beforeEach()

    // se ejecuta el metodo y limpia la data y las pone en el estado que estaban, para que la siguientes pruebas no fallen por alteración de datos
    afterEach(() =>{
        // testClass.setData('')
        testClass.clear();
    })

    // afterAll()

    test.only('test-grupo-006-1', () => {
        // Arrange
        testClass.increment();
        // Act
    
        // Assert
        expect(testClass.data).toBe(1);
    })


    test.only('test-grupo-006-2', () => {
        // Arrange
        testClass.increment();
        testClass.increment();

        // Act
    
        // Assert
        expect(testClass.data).toBe(2);
    })
})


// Pruebas dirigidas por datos
describe('grupo-007', () =>{
    let myArray7 = [1, 2, 3, 4];

    let myArray8 = [
        [0, true],
        [1, false],
        ['aaa', false]
    ]

    myArray7.forEach((e)=>{
        test.only(`ejecutandoPruebaParaElDato ${e}'`, () => {
            // Arrange

            // Act
        
            // Assert
            expect(e).toBeLessThan(5);
        })
    })
})



// callback
function incrementarSaldo(data, callbackFn) {
    let addPrice
    addPrice += data;

    callbackFn(data);
}

describe('grupo-008', () =>{
    test.only('test-grupo-008-1', () => {
        // Arrange
        let fn = jest.fn();

        // Act
        incrementarSaldo(50, fn)
        
        // Assert
        expect(fn).toHaveBeenCalled();
    })

    test.only('test-grupo-008-2', () => {
        // Arrange
        let price = 50;
        let fn = jest.fn();

        // Act
        incrementarSaldo(50, fn)
        
        // Assert
        expect(fn).toBeCalledWith(price);
    })
})


// WebService

let myAPI  = {
    myAsyncMethod(data){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                // resolve(200);
                reject(400);
            }, 2000);
        })
    }
}


describe('grupo-009', () =>{
    test.only('test-grupo-009-1', async () => {
        expect.assertions(1);
        
        try {
            let res = await myAPI.myAsyncMethod('Hola');

            expect(res).toBe(200);
        } catch (error) {
            expect(error).toBe(400);
        }
    }, 10000) // se ejecuta este tiempo para darle a saber a JS que espere, ya que pasados 5seg, el abandona la conexion
})


