import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-werdegang',
  standalone: false,
  templateUrl: './werdegang.html',
  styleUrl: './werdegang.scss'
})
export class Werdegang implements OnInit{

  ngOnInit(): void {
        AOS.init({
          duration: 2000,
          once: true,
        });
    }

    careerItems = [
  {
    title: 'Hauptschulabschluss an der Mittelpunktschule Angersbach',
    year: '2006 - 2015',
    description: '2015 habe ich meinen Hauptschulabschluss an der Mittelpunktschule Angersbach erfolgreich erworben. Dabei konnte ich erste Erfahrungen mit verschiedenen Fächern sammeln und mein Interesse an Technik und Mathematik entwickeln.',
    image: 'url(/assets/MPSA.jpg)'
  },
  {
    title: 'Berufsfachschule Wirtschaft und Verwaltung',
    year: '2015 - 2017',
    description: 'An der Vogelsbergschule Lauterbach vertiefte ich mein Wissen in Wirtschaft und Verwaltung. Dies half mir, betriebliche Abläufe und organisatorische Prozesse besser zu verstehen.',
    image: 'url(/assets/VBS.jpg)'
  },
    {
    title: 'Praktikum im E‑Commerce bei HorSeven GmbH, Angersbach',
    year: '2017 – 2018',
    description: `
    Während meines Praktikums bei der HorSeven GmbH, einem führenden Anbieter im Pferdedecken‑Handel, unterstützte ich das Team im Bereich E‑Commerce.
    Zu meinen Aufgaben gehörten die Pflege von Produktdaten, Bildbearbeitung und die Optimierung von Artikelseiten.
  `,
    image: 'url(/assets/HorSeven.jpg)'
  },
  {
    title: 'Fachabitur Wirtschaftsinformatik',
    year: '2017 - 2019',
    description: 'Mit dem Schwerpunkt Wirtschaftsinformatik baute ich an der Vogelsbergschule Lauterbach meine IT-Leidenschaft weiter aus und vertiefte mein Wissen in Informatik.',
    image: 'url(/assets/JBInformatik.jpg)'
  },
  {
    title: 'Studium der Angewandten Informatik',
    year: '2019 - 2022',
    description: 'Ich begann ein Studium der Angewandten Informatik an der Hochschule Fulda, brach es jedoch ab, da mir die Praxisnähe fehlte. Währenddessen unterstützte ich Kommilitonen als Nachhilfegeber in Programmierung und entdeckte meine Freude am Erklären komplexer Themen.',
    image: 'url(/assets/HSF.webp)'
  },
  {
    title: 'Ausbildung zum Fachinformatiker',
    year: '2022 - 2025',
    description: 'Meine Ausbildung bei EDAG Engineering vermittelte mir fundierte technische Fähigkeiten und Praxiswissen. Den theoretischen Teil absolvierte ich an der Ferdinand Braun Schule Fulda. Ich habe die Ausbildung am 12.06.2025 erfolgreich abgeschlossen.',
    image: 'url(/assets/FerdinandBraun.webp)'
  }
];
}
