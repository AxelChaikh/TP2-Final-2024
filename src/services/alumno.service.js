import Factory from "../models/Factory.js"
import config from "../config.js"
import { validateAlumno } from "../validate/schema.js"
import { validateNota } from "../validate/schema.js"
class AlumnoService {
    constructor() {
        this.model = Factory.get(config.PERSISTENCE).alumno
    }


    getAllAlumnos = async () => {
        return await this.model.getAllAlumnos()
    }

    getAlumnosPorNota = async () => {
        return await this.model.getAlumnosPorNota()
    }

    uploadNewAlumno = async (alumno) => {
        const validate = validateAlumno(alumno)
        const newAlumno = validate.error ? validate.errorMessage : await this.model.uploadNewAlumno(alumno)
        return newAlumno
    }

    updateNota = async (id, data) => {

        const validate = validateNota(data)
        const newNota = validate.error ? validate.errorMessage : await this.model.updateNota(id, data);
        return newNota
    }


}

export default AlumnoService;