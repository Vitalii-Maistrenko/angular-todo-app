import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MyService } from './my.service';
import { CommonModule } from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MyService],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0, transform: 'scale(0.9)' })), 
      state('*', style({ opacity: 1, transform: 'scale(1)' })), 
      transition('void <=> *', animate('0.5s ease-in-out')),
    ]),
  ],
})

export class AppComponent {
  title = 'angular-todo-app';
  showImage = true;
  firstName: string = '';
  lastName: string = '';
  streetAddress: string = '';
  streetAddressLine: string = '';
  city: string = '';
  state: string = '';
  postalCode: string = '';
  phone: string = '';
  email: string = '';

  constructor(private myService: MyService) {}

  ngOnInit() {
    setTimeout(() => {
      this.showImage = false;
    }, 1000);
  }

  sendForm(form: any) {
    console.log(form.value);
    if (form.valid) {
      this.myService.sendData(form.value).subscribe(
        (response) => {
          console.log('Data sent successfully', response);
        },
        (error) => {
          console.error('Error sending data', error);
        }
      );
    }
  }
}
