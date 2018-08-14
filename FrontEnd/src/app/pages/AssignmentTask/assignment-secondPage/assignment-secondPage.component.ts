import { NbMenuService } from '@nebular/theme';
import { Component } from '@angular/core';

@Component({
  selector: '',
  styleUrls: ['./assignment-secondPage.component.scss'],
  templateUrl: './assignment-secondPage.component.html',
})
export class AssignmentSecondPageComponent {

  constructor(private menuService: NbMenuService) {
  }

  goToHome() {
    this.menuService.navigateHome();
  }
}
