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
    public estudiando: string,
    


 // Datos adicionales para NO TRABAJA
 public conoce_bolsa_trabajo?: string,
 public utiliza_bolsa_trabajo?: string,
 public calidad_servicio?: string,
 public capacitacion_postegreso?: string,
 public sugerencias?: string,


 // Datos adicionales para SI TRABAJA
 public medio_colocacion?: string,
 public localidad_empleo?: string,
 public domicilio_empresa?: string,
 public tiempo_colocacion?: string,
 public tipo_organizacion?: string,
 public tamano_organizacion?: string,
 public nombre_empresa?: string,
 public giro_empresa?: string,
 public sueldo_mensual?: string,
 public tiene_prestaciones?: string,
 public ocupacion?: string,
 public puesto_actual?: string,
 public trabaja_perfil_egreso?: string,
 public nombre_jefe?: string,
 public telefono_jefe?: string,
 public numero_trabajos?: string,
 public puestos_directivos?: string,
 public empresa_propia?: string,
 public experiencia_transnacional?: string,
 public solucion_problemas?: string,
 public desempeno_funciones?: string,
 public comunicacion_ideas?: string,
 public capacidad_liderazgo?: string,
 public habilidades_faltantes?: string,

  ) { }
}
