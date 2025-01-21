import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../shared/usuario.service';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { UsuarioModel } from '../shared/usuario.model';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  id = ''
  usuario = new UsuarioModel("","","","","","","","","","","",);
  

  carreras = [
    'TSU. CONSTRUCCIÓN',
    'TSU. EN TECNOLOGÍAS DE LA INFORMACIÓN ÁREA DESARROLLO DE SOFTWARE MULTIPLATAFORMA',
    'TSU. MECÁNICA ÁREA AUTOMOTRIZ',
    'TSU. ADMINISTRACIÓN ÁREA FORMULACIÓN Y EVALUACIÓN DE PROYECTOS',
    'TSU. AGROBIOTECNOLOGÍA ÁREA VEGETAL',
    'TSU. PROCESOS ALIMENTARIOS',
    'TSU. MECÁNICA ÁREA INDUSTRIAL',
    'TSU. CONTADURÍA',
    'TSU. DESARROLLO DE NEGOCIOS ÁREA MERCADOTECNIA',
    'TSU. GASTRONOMÍA',
    'TSU. MECATRÓNICA ÁREA AUTOMATIZACIÓN'
  ];

  patternMatricula = '^[0-9]{8}$';
  
  convertirAMayusculas() {
    this.usuario.nombre = this.usuario.nombre.toUpperCase();
  }

  opcionesEstatus: string[] = [
    'DEDICADO/A AL HOGAR',
    'NO TRABAJO',
    'TRABAJO',
    'ESTUDIO',
    'ESTUDIO Y TRABAJO',
  ];


  opciones_calidad_servicio: string [] = [
    'MUY BIEN',
    'BIEN',
    'REGULAR',
    'MAL',
    'NO APLICA',
  ]


  opciones_capacitacion_postegreso: string [] = [
    'MUY BIEN',
    'BIEN',
    'REGULAR',
    'MAL',
    'NO APLICA',
  ]


  opciones_medio_colocacion: string [] = [
    'ESTADÍA',
    'BOLSA DE TRABAJO DE LA UTHH',
    'CUENTA PROPIA',
    'RECOMENDACIÓN DE AMIGO/A O FAMILIAR',
    'AUTOEMPLEO',
  ]

  opciones_localidad_empleo: string [] = [
    'ZONA DE INFLUENCIA (Atlapexco, Axtla de Terrazas, Benito Juárez, Calnalí, Chalma, Chapulhuacan, Chiconamel, Huautla, Huejutla, Huazalingo, Jaltocán, Platón Sánchez,  San Felipe Orizatlan, Tantoyuca, Tamazunchale,  Tlanchinol, Tepehuacan, Yahualica, Xochiatipan)',
    'INTERIOR DEL ESTADO',
    'FUERA DEL ESTADO',
    'EXTRANJERO',
  ]

  
  opciones_tiempo_colocacion: string [] = [
    'ESTADÍA',
    '1 A 3 MESES',
    '4 A 6 MESES',
  ]

  opciones_tipo_organizacion: string [] = [
    'PRIVADA',
    'PÚBLICA',
    'PROPIA',
  ]

  opciones_tamano_organizacion: string [] = [
    'MICRO (DE 1 A 10 PERSONAS)',
    'PEQUEÑA (DE 11 A 50 PERSONAS)',
    'MEDIANA (DE 51 A 100 PERSONAS)',
    'MACRO (+ DE 200 PERSONAS)',
  ]

  opciones_giro_empresa: string[] = [
    "GIRO DE LA EMPRESA",
    "AGRICULTURA",
    "GANADERÍA",
    "COMERCIO",
    "EDUCACIÓN",
    "SERVICIOS",
    "SERVICIOS PÚBLICOS",
    "TIC",
    "TRANSFORMACIÓN/MANUFACTURERA",
    "CONSTRUCCIÓN"
  ];

  opciones_sueldo_mensual: string[] = [
    "DE $2,000 HASTA $10,372.20",
    "DE $10,372.30 HASTA $20,744.40",
    "DE $20,744.50 HASTA $31,116.60",
    "DE $31,116.70 HASTA $41,488.80",
    "DE $41,488.90 HASTA $51,861.00",
    "MÁS DE $51,862.00"
  ];

  opciones_tiene_prestaciones: string[] = [
    "SI",
    "NO",
  ];
  
  opciones_ocupacion: string[] = [
    "OPERARIO",
    "TÉCNICO GENERAL",
    "TÉCNICO ESPECIALIZADO",
    "ADMINISTRATIVO/A",
    "SUPERVISOR/A",
    "GERENTE",
    "DIRECTOR/A",
    "AUTOEMPLEO",
    "OTRA"
  ];

  opciones_trabaja_perfil_egreso: string[] = [
    "SI",
    "NO",
  ];

  opciones_numero_trabajos: string[] = [
    "1",
    "2",
    "3",
    "4",
    "MÁS DE 5",
  ];
  
  






  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    if(this.id) {
      console.log("EDITAR");
      this.usuarioService.obtenerUsuario(this.id).subscribe(data => {
        this.usuario = data[0]
      }, error => {
        console.log(error);
      })
    } else {
      console.log("CREAR");
    }
  }

  onSubmit() {
    console.log('onSubmit');

    if(this.usuario.id_usuario) {
      this.usuarioService.actualizarUsuario(this.usuario).subscribe(data => {
        alert(data)
        this.router.navigate(['/usuarios'])
      })
    } else {
      console.log('crear');
      this.usuarioService.agregarUsuario(this.usuario).subscribe(data => {
        alert(data)
        this.router.navigate(['/usuarios'])
      })
    }
  }
}
