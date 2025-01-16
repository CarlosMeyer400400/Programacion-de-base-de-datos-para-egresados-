export class UsuarioModel {
  constructor(
    public id_usuario: string,
    public matricula: string,
    public carrera: string,
    public nombre: string,
    public sexo: string,
    public telefono_personal: string,
    public telefono_recados: string,
    public correo_institucional: string,
    public correo_personal: string,
    public estatus_laboral: string,
    public estudiando: string
  ) { }
}
