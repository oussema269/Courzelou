import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { course } from 'src/app/model/Course';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  course!:course
  url='http://localhost:9000/Courzelou/cour'
   constructor(private http :HttpClient) { }
   getCourse(){
     return this.http.get(this.url+"/getCour");
   }
   postCourse(course:course){
      return this.http.post(this.url+"/ajouterCour",course)
   } 
   deleteCourse(id:string){
    return this.http.delete(`${this.url}/supprimerCour/${id}`);
  }
  modifierCourse(id:string , course:course){
    return this.http.put(`${this.url}/modifierCour/${id}`,course);

  }

}
