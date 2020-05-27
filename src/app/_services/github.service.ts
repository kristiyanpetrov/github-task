import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) {
  }

  getGithubInfo() {
    const url = 'https://api.github.com/repos/kristiyanpetrov/shop-app-angular/commits';
    return this.http.get(url);
  }
}
