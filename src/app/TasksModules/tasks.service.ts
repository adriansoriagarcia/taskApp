import { Injectable } from '@angular/core';
import { Task } from './taks.model'; 

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasks: Task[];
  private key:number;
  private title:string;
  private description:string;
  private update = {};

  constructor() { 
    this.tasks = [];
    this.key = 0;
    this.title = '';
    this.description = '';
    
  }

  getTasks() {
    //retornamos todos las tasks
    return this.tasks;
  }

  addTask(task: Task) {
    //añadimos la nueva task al array de tasks
    this.tasks.push(task);
  }

  newTask():Task {
      //retorna un task vacío
      return {
        id: this.tasks.length,
        title: '',
        description:''
      };
  }

  deleteTask(id:any){

    //obtenemos la clave del objeto que se desea eliminar.
    this.key = this.tasks.findIndex(taks => taks.id === id);
    //con el método splice eliminamos ese objeto del array.
    this.tasks.splice(this.key, 1);  

  }

  taskGet(id:any){
    //obtenemos la clave del objeto que se desea editar.
    this.key = this.tasks.findIndex(taks => taks.id === id);
    
    //añadimos a title el valor del title seleccionado.
    this.title = this.tasks[this.key].title;
    //añadimos a description el valor de la description seleccionada.
    this.description = this.tasks[this.key].description;

  }

  editItem(){
    //Objeto que contiene los valores de title y description de la task seleccionada.
    this.update = {
      title : this.title ,
      description : this.description
    }
    //retornamos los valores de title y description obtenidos en el método tastGet.
    return this.update;
  }

  updateItem(title:any, description:any){
    //añadimos los nuevos valores a title y description para actualizarlos.
    this.tasks[this.key].title = title;
    this.tasks[this.key].description = description;
  }


}
