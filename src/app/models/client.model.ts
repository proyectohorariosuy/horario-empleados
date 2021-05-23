export interface Client {
    id: string;
    nombre: string;
    telefono: string;
    domicilio: string;
    email: string;
    personas_contacto?: string[];
}
