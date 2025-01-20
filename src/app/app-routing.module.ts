import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';

const routes: Routes = [
  { path:'usuarios', component: ListaUsuariosComponent },
  { path:'usuarios/formulario', component: EditarUsuarioComponent },
  { path:'usuarios/editar/:id', component: EditarUsuarioComponent },
  { path:'**', redirectTo:'/usuarios/formulario', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
