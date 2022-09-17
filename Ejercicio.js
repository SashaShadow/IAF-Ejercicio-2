import fs from "fs";
import { JSON1, JSON2 } from "./Datos.js";

const createJSON3 = () => {
    let JSON3 = JSON2.data;
    for (let i = 0; i < JSON2.data.length; i++) {
        for (let j = 0; j < JSON1.data.length; j++) {
            if (JSON1.data[j].data['#idpaciente'] === JSON2.data[i]['#idpaciente'] &&
                JSON1.data[j].data.fecha === JSON2.data[i].fecha) {
                JSON3.splice(i, 1);
            }
        }
    }
    JSON3 = JSON.stringify({"data": JSON3});
    fs.writeFileSync('./JSON3.json', JSON3);
    console.log('Archivo JSON3 generado')
}

//EJECUTAR FUNCION SIGUIENTE PARA CREAR ARCHIVO JSON3:
createJSON3();