import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spell',
  templateUrl: './spell.component.html',
  styleUrls: ['./spell.component.css']
})
export class Spell {
  // Name of Card
  name: string;

  // Cost of the spell (will equal total number of mana need for the spell)
  convertedManaCost: Array<number>;

  // Since we are making a genric creature object we will use 
  // a property to detect each mana type.

  numberOfBlueMana: number;
  numberOfRedMana: number;
  numberOfBlackMana: number;
  numberOfWhiteMana: number;
  numberOfGreeMana: number;
  
  // types
  SpellType: string; // instant ,Sorcery etc.

  spellAbility() {
    // Spell does something  for example put target Creature or Artifact on top of  owner's library
  }

}
