/**
 * Una funcion que reciba un numero o un string
 * correspondiente a un mes, y devuelva el opuesto.
 * (Si recibe 12, devuelve Diciembre, si recibe Diciembre, devuelve 12).
 * Comenzar por los tests, recordar tirar errores y testearlos.
 */
const getMes = (mes) => {
    switch(mes) {
        case "Enero": 
            return 1;
        case "Febrero":
            return 2;
        case "Marzo":
            return 3;
        case "Abril":
            return 4;
        case "Mayo":
            return 5;
        case "Junio":
            return 6;
        case "Julio":
            return 7;
        case "Agosto":
            return 8;
        case "Septiembre":
            return 9;
        case "Octubre":
            return 10;
        case "Noviembre":
            return 11;
        case "Diciembre":
            return 12;
        case 1:
            return "Enero";
        case 2:
            return "Febrero";
        case 3:
            return "Marzo";
        case 4:
            return "Abril";
        case 5:
            return "Mayo";
        case 6:
            return "Junio";
        case 7:
            return "Julio";
        case 8:
            return "Agosto";
        case 9:
            return "Septiembre";
        case 10:
            return "Octubre";
        case 11:
            return "Noviembre";
        case 12:
            return "Diciembre";
        default:
            throw new Error ("El mes no existe");
    }
};

test('le paso "Enero" y devuelve 1', () => {
    expect(getMes("Enero")).toBe(1);
});


test('le paso "noviembre" tira error', () =>{
    expect(() => getMes("noviembre")).toThrow("El mes no existe");
});

test('le paso 4 y devuelve Abril', () =>{
    expect(getMes(4)).toBe("Abril");
});
