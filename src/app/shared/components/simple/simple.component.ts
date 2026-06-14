import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilityService } from '../../../core/services/utility.service';

@Component({
  selector: 'app-simple',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simple.component.html',
})
export class SimpleComponent {
   public utilityService:UtilityService=inject(UtilityService);
  
}
