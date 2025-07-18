import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as AOS from 'aos';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact implements OnInit{

  ngOnInit(): void {
      AOS.init({
        duration: 2000,
        once: true,
      });
  }

 contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const { name, email, message } = this.contactForm.value;

      const subject = encodeURIComponent(`Kontaktanfrage von ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`
      );

      const mailto = `mailto:mail@justinbecker.de?subject=${subject}&body=${body}`;
      window.location.href = mailto;
    }
  }
}
