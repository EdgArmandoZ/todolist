import { Component, Input } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-agregar-tareas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agregar-tareas.component.html',
  styleUrl: './agregar-tareas.component.css'
})
export class AgregarTareasComponent {
@Input() agregarTareasRecibidas: string[]=[];
//metodo para agregar tareas
nuevaTarea = "";

agregarTarea(){
  if(this.nuevaTarea.trim() !== ""){
    this.agregarTareasRecibidas.push(this.nuevaTarea);
    this.nuevaTarea="";
  }
}
}