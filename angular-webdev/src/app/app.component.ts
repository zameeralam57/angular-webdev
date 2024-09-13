import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,  FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' 
  
})

export class AppComponent { 
  title = 'my-app';
  Name: string = ''; // Define a property to bind with ngModel 
}
