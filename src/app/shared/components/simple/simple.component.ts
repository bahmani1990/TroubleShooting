import { Component, inject } from '@angular/core';

import { UtilityService } from '../../../core/services/utility.service';

@Component({
    selector: 'app-simple',
    imports: [],
    templateUrl: './simple.component.html'
})
export class SimpleComponent {
   public utilityService:UtilityService=inject(UtilityService);
  
}
