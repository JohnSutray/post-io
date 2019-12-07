import { Component } from '@angular/core';
import { AuthorizeService } from '../../services/authorize.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private readonly authorizeService: AuthorizeService,
  ) {
  }

  get isSigned() {
    return this.authorizeService.isSigned;
  }
}
