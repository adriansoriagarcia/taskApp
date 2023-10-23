import { Component } from '@angular/core';
import { TasksService } from '../../TasksModules/tasks.service';
import { Task } from '../../TasksModules/taks.model';



@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent {

    button:number;
    task: Task;
    tasks:Task[];
    dateTask:any;

  constructor(private taskService:TasksService){
    this.button = 0;
    this.task = this.taskService.newTask();
    this.tasks = this.taskService.getTasks();
    
  }


  ngOnInit(){
    
  }

  newTask():void {

    if(this.task.title != '' && this.task.description != '') {
      //añadimos el nuevo task 
      this.taskService.addTask(this.task);
      
    } else{
      //vaciamos los campos input
      this.task = this.taskService.newTask();
      alert("Required fields");
    }
    //vaciamos los campos input
    this.task = this.taskService.newTask();
 
    
  }
  
  deleteItem(id:any){
    this.taskService.deleteTask(id);

    // Vaciamos los campos y cambiamos de boton si se elimina mientras se edita
    //(Solo en caso de que exista 1 task)
    if(this.tasks.length == 0){
      this.button = 0;
      this.task = this.taskService.newTask();
    }
    
  }

  //obtenemos el id que deseamos modificar 
  getItem(id:any){

    this.taskService.taskGet(id);
    
    //obtenemos el titulo y la descripcion
    this.dateTask = this.taskService.editItem();
    //console.log(this.dateTask.title)

    //añadimos el title al input
    this.task.title = this.dateTask.title;
    //añadimos la description al input
    this.task.description = this.dateTask.description;
    this.button = 1;
  }

  updateTask(){
    //obtenemos el nuevo valor de title y lo igualamos al que teniamos
    this.task.title = this.task.title;
    //obtenemos el nuevo valor de description y lo igualamos al que teniamos
    this.task.description = this.task.description;
    //Lo pasamos al metodo updateItem para actualizarlo
    this.taskService.updateItem(this.task.title,this.task.description);
    this.button = 0;

    //vaciamos los campos input
    this.task = this.taskService.newTask();

  }





}


