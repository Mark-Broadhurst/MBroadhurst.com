import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {

  constructor(private http: HttpClient) { }

  GetSkills(): Observable<HttpResponse<string[]>> {
    return this.http.get<string[]>('/assets/skills/skills.json', { observe: 'response'});
  }
}
