// Helper para construir headers
function getHeaders() {
    return {
        ...API_CONFIG.DEFAULT_HEADERS,
        apikey: API_CONFIG.API_KEY,
        Authorization: `Bearer ${API_CONFIG.AUTH_TOKEN}`
    };
}

// Servicio base
class BaseService {
    constructor(endpoint) {
        this.endpoint = API_CONFIG.BASE_URL + endpoint;
    }

    async getAll() {
        const res = await fetch(this.endpoint, {
            headers: getHeaders(),
            method: 'GET'
        });
        if (!res.ok) throw new Error(await res.text());
        const text = await res.text();
        return text ? JSON.parse(text) : [];
    }

    async create(data) {
            const res = await fetch(this.endpoint, {
                headers: getHeaders(),
                method: 'POST',
                body: JSON.stringify(data)
            });
            if (!res.ok) throw new Error(await res.text());
            const text = await res.text();
            return text ? JSON.parse(text) : {};
    }

    async update(id, data) {
        // Detectar el endpoint y usar el nombre de columna correcto
        let idField = '';
        if (this.endpoint.includes('profesores')) idField = 'id_profesor';
        else if (this.endpoint.includes('estudiantes')) idField = 'id_estudiante';
        else if (this.endpoint.includes('cursos')) idField = 'id_curso';
        else if (this.endpoint.includes('inscripciones')) idField = 'id_inscripcion';
        else idField = 'id';

        const url = `${this.endpoint}?${idField}=eq.${id}`;
        const res = await fetch(url, {
            headers: getHeaders(),
            method: 'PATCH',
            body: JSON.stringify(data)
        });
        if (!res.ok) throw new Error(await res.text());
        const text = await res.text();
        return text ? JSON.parse(text) : {};
    }

    async delete(id) {
        // Detectar el endpoint y usar el nombre de columna correcto
        let idField = '';
        if (this.endpoint.includes('profesores')) idField = 'id_profesor';
        else if (this.endpoint.includes('estudiantes')) idField = 'id_estudiante';
        else if (this.endpoint.includes('cursos')) idField = 'id_curso';
        else if (this.endpoint.includes('inscripciones')) idField = 'id_inscripcion';
        else idField = 'id';

        const url = `${this.endpoint}?${idField}=eq.${id}`;
        const res = await fetch(url, {
            headers: getHeaders(),
            method: 'DELETE'
        });
        if (!res.ok) throw new Error(await res.text());
        const text = await res.text();
        return text ? JSON.parse(text) : {};
    }
}

// Instancias para cada entidad
const profesoresService = new BaseService(API_CONFIG.ENDPOINTS.PROFESORES);
const estudiantesService = new BaseService(API_CONFIG.ENDPOINTS.ESTUDIANTES);
const cursosService = new BaseService(API_CONFIG.ENDPOINTS.CURSOS);
const inscripcionesService = new BaseService(API_CONFIG.ENDPOINTS.INSCRIPCIONES);

// Exportar si usas módulos, o dejar global si usas <script>
window.profesoresService = profesoresService;
window.estudiantesService = estudiantesService;
window.cursosService = cursosService;
window.inscripcionesService = inscripcionesService;