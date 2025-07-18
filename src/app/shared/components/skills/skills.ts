import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  techCards = [
    {
      title: 'Angular',
      image: 'assets/AngularIcon.png',
      alt: 'Angular Logo',
      description: `
        Diese Webseite wurde mit <strong>Angular</strong> entwickelt, einem leistungsstarken Framework für moderne Webanwendungen.
        <br /><br />
        In meinen Projekten nutze ich Angular in Kombination mit <strong>Django</strong> als Backend.
      `
    },
    {
      title: 'Django',
      image: 'assets/DjangoIcon.svg',
      alt: 'Django Logo',
      description: `
        <strong>Django</strong> ist ein robustes Web-Framework für Python, das ich für meine Backend-Lösungen einsetze.
        <br /><br />
        Es bietet eine klare Struktur und lässt sich einfach mit <strong>PostgreSQL</strong> integrieren.
      `
    },
    {
      title: 'PostgreSQL',
      image: 'assets/PostgresIcon.png',
      description: `
        <strong>PostgreSQL</strong> ist ein leistungsstarkes, objektrelationales DBMS, das ich in meinen Webanwendungen als bevorzugte Lösung einsetze.
        <br /><br />
        Es bietet Stabilität, Skalierbarkeit und eine nahtlose Integration mit <strong>Django</strong>.
      `
    },
    {
      title: 'Postman',
      image: 'assets/PostmanIcon.webp',
      alt: 'Postman Logo',
      description: `
        <strong>Postman</strong> ist ein leistungsstarkes API-Dev-Tool, das ich für das Testen und Verwalten von APIs in meinen Projekten nutze.
        <br /><br />
        Es ermöglicht das effiziente Testen von Endpunkten und das Überprüfen von Datenflüssen zwischen Frontend und Backend.    `
    },
    {
      title: 'SvelteKit',
      image: 'assets/SvelteKitIcon.webp',
      alt: 'SvelteKit Logo',
      description: `
        <strong>SvelteKit</strong> ist ein modernes Webframework, das auf Svelte basiert und für schnelle, reaktive Anwendungen optimiert ist.
        <br /><br />
        Ich nutze es für experimentelle Projekte und kleine Tools, bei denen Performance und Einfachheit im Vordergrund stehen.
      `
    },
    {
      title: 'Docker',
      image: 'assets/DockerIcon.png',
      alt: 'Docker Logo',
      description: `
        <strong>Docker</strong> ermöglicht mir, Anwendungen in isolierten Containern zu entwickeln und bereitzustellen.
        <br /><br />
        Ich setze es ein, um meine Webanwendungen konsistent und plattformunabhängig zu deployen.
      `
    }
    // Weitere Cards kannst du hier hinzufügen
  ];
}
