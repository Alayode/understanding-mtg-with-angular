import { Component, OnInit } from '@angular/core';

/***
 * 
 * Raid abilities care only that you attacked
 * with a creature. It doesn't mater how many creatures
 * attacked with, or which opponent or planeswalker controlled by an opponent those creatures
 * attacked.
 * 
 */
interface Raid {
  hasRaid: boolean;
  hasRaidExecuted: boolean;
  hasACreatureAttacked: boolean;
}

export const CardsInHand = ['SpellCard', 'SpellCard', 'SpellCard'];

interface BattlefieldState {
  OwnersTurn: boolean;
  currentPhase: string;
  BeginningPhase: string;
  UntapStep: string;
  UpkeepStep: string;
  DrawStep: string;
  MainPhase: string;
  CombatPhase: string;
  BeginningOfCombatStep: string;
  DeclareAttackerStep: string;
  DelareBlockersStep: string;
  EndOfCombatStep: string;
  EndStep: string;
  CleanUpStep: string;
}

@Component({
  selector: 'marauding-looter',
  templateUrl: './marauding-looter.component.html',
  styleUrls: ['./marauding-looter.component.css']
})
export class MaraudingLooter {
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
 spellType: string; // instant ,Sorcery etc.
 creatureType: string;
 hasRaid: boolean;
 inGraveyard: boolean;
 inHand: boolean;
 inLibrary: boolean;
 power: number;
 toughness: number;
 currentPhase: string;
 cardWasDrawn: boolean
 creatureAttacked: boolean;

constructor( 
  private raid: Raid,
  private battlefieldState: BattlefieldState
  ) {
  // this.currentPhase = this.battlefieldState.currentPhase;
  // this.raid.hasACreatureAttacked = false;
  // this.raid.hasRaid = true;
  // this.raid.hasRaidExecuted = false;
}

ngOnInit() {
  this.creatureAttacked = this.raid.hasRaidExecuted;
  console.log(this.creatureAttacked );
}

// Abilities
discardACard() {
  // remove a card from your hand (popping the array)
}

drawACard() {
  console.log('You Draw a Card!!');
}

 loot() {
   this.drawACard();
   if(this.cardWasDrawn) {
     this.discardACard();
   }
 }

  

/**
 * At the beginning of your end step, if you attacked with a
 * creature this turn, you may draw a card. If you do, discard.
 * 
 */

checkForRaid() {
  const phase = 'EndStepPhase';
  if( phase === 'EndStepPhase' && this.creatureAttacked === true) {
    this.loot;
  }
}


}
