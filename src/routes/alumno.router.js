import AlumnoController from '../controllers/alumno.controller.js';
import express from 'express'

class AlumnoRouter {
    constructor() {
        this.controller = new AlumnoController();
        this.router = new express.Router();
    }

    start() {

        this.router.get("/all", this.controller.getAllAlumnos)
        this.router.get("/porNota", this.controller.getAlumnosPorNota)
        this.router.post("/newAlumno", this.controller.uploadNewAlumno)
        this.router.put("/update/nota/:id", this.controller.updateNota)

        return this.router;
    }
}

export default AlumnoRouter;