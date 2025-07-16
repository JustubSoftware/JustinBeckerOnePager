import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';



@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About implements OnInit{

  ngOnInit(): void {
      AOS.init({
        duration: 2000,
        once: true,
      });
  }

  hobbies = [
    {
      name: 'Anime',
      description: 'Ich bin ein großer Anime-Fan, besonders von "One Piece", und genieße es, auch andere Serien wie "Jujutsu Kaisen" oder "Chainsaw Man" zu schauen.',
      image: 'assets/one-piece.jpg',
      animation: 'fade-left'
    },
    {
      name: 'Coding',
      description: 'Programmieren ist für mich nicht nur Beruf, sondern auch ein kreatives Hobby, in dem ich eigene Projekte entwickle und neue Dinge lerne.',
      image: 'assets/coding.png',
      animation: 'fade-right'
    },
    {
      name: 'Gaming',
      description: 'Gaming ist eine meiner großen Leidenschaften. Besonders die "The Legend of Zelda"-Reihe hat es mir angetan, aber auch XBOX, Playstation und PC sind Teil meines Hobbyuniversums.',
      image: 'assets/gaming.jpg',
      animation: 'fade-left'
    },
    {
      name: 'Musik',
      description: 'Ich spiele E-Gitarre, Klavier und Geige. Musik ist für mich ein kreatives Ventil, in dem ich mich voll und ganz ausdrücken kann.',
      image: 'assets/music.webp',
      animation: 'fade-right'
    }
  ];
}
