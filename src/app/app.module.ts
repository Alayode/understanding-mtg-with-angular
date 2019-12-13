import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Creature } from './creature/creature.component';
import { Spell } from './spell/spell.component';
import { MaraudingLooter } from './marauding-looter/marauding-looter.component';

@NgModule({
  declarations: [
    AppComponent,
    Creature,
    Spell,
    MaraudingLooter
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
