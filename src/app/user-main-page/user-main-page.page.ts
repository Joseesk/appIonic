import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-user-main-page',
  templateUrl: './user-main-page.page.html',
  styleUrls: ['./user-main-page.page.scss'],
})
export class UserMainPagePage implements OnInit {
  userName: String = '';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const usernameParam = this.activatedRoute.snapshot.paramMap.get('userName');
    if(usernameParam !== null){
      this.userName = usernameParam;
    }
  }

}
