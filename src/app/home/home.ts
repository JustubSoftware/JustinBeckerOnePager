import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss'
})

export class Home implements OnInit{

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Justin Becker - Fullstack Web-Developer aus Wartenberg');
    this.meta.addTags([
      {
        name: 'description',
        content: 'Ich bin ein Fullstack-Webentwickler aus Hessen und liebe Angular, Django und allgemein kreatives Coding.'
      },
      {name: 'author', content: 'Justin Becker'},
      {name: 'robots', 'content': 'index, follow'}
    ])
  }
}
