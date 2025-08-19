import { Component, Input } from '@angular/core';
import { Skill } from '../../types/skills';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  @Input() skills!: Skill[];
}
