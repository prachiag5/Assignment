import { NbMenuService } from '@nebular/theme';
import { Component } from '@angular/core';

@Component({
  selector: 'ngx-assignment-page',
  styleUrls: ['./assignment-page.component.scss'],
  templateUrl: './assignment-page.component.html',
})
export class AssignmentPageComponent {

  constructor(private menuService: NbMenuService) {
  }

  goToHome() {
    this.menuService.navigateHome();
  }
}
