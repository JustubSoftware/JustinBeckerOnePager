import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { About } from './shared/components/about/about';
import { Contact } from './shared/components/contact/contact';
import { Skills } from './shared/components/skills/skills';
import { Header } from './shared/components/header/header';
import { Footer } from './shared/components/footer/footer';
import { NgParticlesModule } from 'ng-particles';
import { AnimatedBackground } from './shared/components/animated-background/animated-background';
import { Werdegang } from './shared/components/werdegang/werdegang';
import { LucideAngularModule} from 'lucide-angular';
import { Github, Linkedin, Mail} from 'lucide-angular/src/icons';
import { ReactiveFormsModule } from '@angular/forms';
import { Impressum } from './impressum/impressum';
import { Datenschutz } from './datenschutz/datenschutz';

@NgModule({
  declarations: [
    App,
    Home,
    About,
    Contact,
    Skills,
    Header,
    Footer,
    AnimatedBackground,
    Werdegang,
    Impressum,
    Datenschutz
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgParticlesModule,
    LucideAngularModule.pick({Github, Linkedin, Mail}),
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
