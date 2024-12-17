import Joi from "joi"

export const validateAlumno = (alumno) => {
    const alumnoSchema = Joi.object({
        nombre: Joi.string().min(3).max(25).required(),
        apellido: Joi.string().min(3).max(25).required(),
        nota: Joi.number().min(0).max(10).required()
    })
    const { error } = alumnoSchema.validate(alumno)
    const result = {
        error: error ? true : false,
        errorMessage: error ? error.details[0].message : null
    }
    return result
}


export const validateNota = (nota) => {
    const notaSchema = Joi.object({
        nota: Joi.number().min(0).max(10).required()
    })
    const { error } = notaSchema.validate(nota)
    const result = {
        error: error ? true : false,
        errorMessage: error ? error.details[0].message : null
    }
    return result
}