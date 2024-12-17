class AlumnoModelMem {
    constructor() {
        this.alumnos = [
            {
                id: 1,
                nombre: 'Juan',
                apellido: 'Perez',
                nota: 8
            },
            {
                id: 2,
                nombre: 'Ana',
                apellido: 'Suarez',
                nota: 9
            },
            {
                id: 3,
                nombre: 'Juan',
                apellido: 'Perez',
                nota: 5
            },
            {
                id: 4,
                nombre: 'Pedro',
                apellido: 'Gomez',
                nota: 6
            },
            {
                id: 5,
                nombre: 'Ana',
                apellido: 'Suarez',
                nota: 10
            }
    ];
    }



    getAllAlumnos = async () => {
        return this.alumnos
    }

    getAlumnosPorNota = async () => {
        const listado = []

        this.alumnos.forEach((alumno) => {
            const aCoincide = listado.find( (a) => a.nombre === alumno.nombre && a.apellido === alumno.apellido )

            if (aCoincide) {
                aCoincide.notas = [...aCoincide.notas, alumno.nota]
            } else {
                listado.push({
                    nombre: alumno.nombre,
                    apellido: alumno.apellido,
                    notas: [alumno.nota],
                });
            }
        });

        return listado
    };

    uploadNewAlumno = async (alumno) => {
        const allAlumnos = await this.alumnos
        const idNew = allAlumnos[allAlumnos.length - 1].id + 1
        alumno.id = idNew
        this.alumnos.push(alumno)
        return alumno
    }

    updateNota = async (id, data) => {
        try {
            let resp;
            if (data?.nota > 0 && data?.nota <= 10) {
                const index = await this.alumnos.findIndex(u => u.id == id)
                if (index > -1) {
                    const newAlumno = { ...this.alumnos[index], ...data }
                    this.alumnos.splice(index, 1, newAlumno)
                    resp = newAlumno;
                } else {
                    resp = 'Id inválido';
                }
            } else {
                resp = 'Nota inválida';
            }
            return await resp;
        } catch (error) {
            console.log(error);
        }
    }


}

export default AlumnoModelMem