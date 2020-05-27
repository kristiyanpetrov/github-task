import {Component, OnInit} from '@angular/core';
import {GithubService} from '../_services/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {
  data: any = [];

  constructor(private githubService: GithubService) {
  }

  ngOnInit(): void {
    this.getGithubData();
  }

  getGithubData() {
    this.githubService.getGithubInfo().subscribe(res => {
      this.data = res;
    });
  }

}
