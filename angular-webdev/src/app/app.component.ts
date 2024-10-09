import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, Routes } from '@angular/router';
//import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //

@Component({
  selector: 'app-root', 
  standalone: true,
  imports: [RouterOutlet ,  FormsModule, RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' 
  
})


export class AppComponent { 
  title = 'my-app';
  Name: string = ''; // Define a property to bind with ngModel 
}


