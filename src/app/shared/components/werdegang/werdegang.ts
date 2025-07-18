import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-werdegang',
  standalone: false,
  templateUrl: './werdegang.html',
  styleUrl: './werdegang.scss'
})
export class Werdegang {
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
