const { test, expect, fit, describe }  = require("@jest/globals");

// tecnica AAA

// describe :: permite agrupar pruebas & fdescribre :: obliga a solo ejecutar esa prueba
describe('grupo-001', () =>
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
)


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


    
    let myArray1  = [1, 2, 3]

    test.only('test-grupo-003-2', () => {
    
        // Arrange
        

        // Act
    
        // Assert
        expect(myArray1).not.toContain(20) // validar que no contenga el valor indicado
    })
})
