import { Component } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-simple',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simple.component.html',
  styleUrl: './simple.component.css'
})
export class SimpleComponent {
  constructor(
    public ntf:NotificationService
  ){}
}
