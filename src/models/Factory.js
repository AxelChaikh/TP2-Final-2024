import AlumnoModelMem from "./DAO/alumno.model.mem.js";


class Factory {
    static get(persistence){
        switch (persistence) {
            case "MEM":
                console.log("Persistiendo en la memoria del servidor")
                return {
                    alumno: new AlumnoModelMem()
                }
            default:
                console.log("Persistiendo en la memoria del servidor")
                return {
                    alumno: new AlumnoModelMem()
                }
        }
    }
}

export default Factory