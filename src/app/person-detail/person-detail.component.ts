import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-person-detail',
  imports: [RouterModule],
  templateUrl: './person-detail.component.html',
  styleUrl: './person-detail.component.css'
})
export class PersonDetailComponent implements OnInit{
  person: any;

  constructor(
    private personService: PeopleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log(this.route);
    console.log(this.route.snapshot)
    console.log(this.route.snapshot.paramMap)
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.person = this.personService.getPersonById(id);
  }
}
