import AlumnoService from "../services/alumno.service.js";

class AlumnoController {
    constructor() {
        this.service = new AlumnoService();
    }


    getAllAlumnos = async (req, res) => {
        const alumnos = await this.service.getAllAlumnos();
        res.status(200).send(alumnos);
    }

    getAlumnosPorNota = async (req, res) => {
        const alumnos = await this.service.getAlumnosPorNota();
        res.status(200).send(alumnos);
    }

    uploadNewAlumno = async (req, res) => {
        const newAlumno = req.body
        if (JSON.stringify(newAlumno) === "{}") {
            res.status(400).send("El cuerpo no puede estar vacio")
        } else {
            const newA = await this.service.uploadNewAlumno(newAlumno)
            res.status(200).send(newA)
        }
    }

    updateNota = async (req, res) => {

        const { id } = req.params;
        const data = req.body;
        if (id == null) {
            res.status(400).send("ID inválido")
        } else {
            const alumno = await this.service.updateNota(id, data)
            res.status(200).send(alumno)
        }
    }

}

export default AlumnoController;