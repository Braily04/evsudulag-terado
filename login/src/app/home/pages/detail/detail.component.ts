import { Component } from '@angular/core';
import { UserDetail } from '../../models/UserModels';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-detail',
  standalone: false,
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  // user: UserDetail | null;

  // constructor(private UserService: UserService) {
  //   this.user = this.UserService.getLoggedInUser();
  // }

}
