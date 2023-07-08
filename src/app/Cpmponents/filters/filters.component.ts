import { AfterViewChecked, AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements AfterViewInit {
  filterForm: FormGroup;
  
      constructor(private formBuilder: FormBuilder) { 
        this.filterForm = this.formBuilder.group({
          name: '',
        });
      }

      
    
      ngAfterViewInit() {

        const buttons = document.querySelectorAll('#proberties button');

        buttons.forEach(button => {
          button.addEventListener('click', () => {
            button.classList.toggle('selected');
          });
        });

        

        
      
     }
    
     onSubmit() {
    
    }
    
}