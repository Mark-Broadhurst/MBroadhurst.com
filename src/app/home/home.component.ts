import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'mb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: []
})
export class HomeComponent implements OnInit {

  constructor(
    private logger: LoggerService,
    private skillService: SkillsService,
  ) { }

  skills: string[];
  education: string[];
  experience: string[];

  ngOnInit() {
    this.skillService.GetSkills()
      .subscribe(resp => {
        this.logger.log('Loaded Skills');
        this.skills = resp.body.sort();
      });
  }

}
