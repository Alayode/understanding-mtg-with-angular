import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'creature',
  templateUrl: './creature.component.html',
  styleUrls: ['./creature.component.css']
})
export class Creature {
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
  CreatureType: string;
  power: number;
  toughness: number;

}

