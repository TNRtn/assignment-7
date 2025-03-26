import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }
  private people = [
    {
      id: 1,
      name: 'tnr',
      technology: 'Angular',
      experience: '5 years',
      projects: ['E-commerce Platform', 'Admin Dashboard'],
      bio: 'Frontend specialist with Angular expertise'
    },
    {
      id: 2,
      name: 'nkr',
      technology: 'React',
      experience: '3 years',
      projects: ['Social Media App', 'Analytics Tool'],
      bio: 'React developer with UI/UX skills'
    },
    {
      id: 3,
      name: 'dheeraj',
      technology: 'Node.js',
      experience: '7 years',
      projects: ['REST API', 'Microservices'],
      bio: 'Backend developer with Node.js expertise'
    }
  ];

  getAllPeople() {
    return this.people;
  }

  getPersonById(id: number) {
    return this.people.find(person => person.id === id);
  }
}
