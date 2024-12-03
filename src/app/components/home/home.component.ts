import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { Ligne } from '../../interfaces/lignes';
import { Lignes } from '../../data/lignes';
import { Arret } from '../../interfaces/arret';
import { ARRETS101A } from '../../data/arrets';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DropdownModule, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  lignes: Ligne[] = Lignes;
  stops: Arret[] = filterAndSortStops(ARRETS101A);

  selectedLigne!: Ligne;
  selectedStop!: Arret;

  isLineModalOpen = false;
  isStopModalOpen = false;

  constructor(private router: Router) {}

  nagigateToStops() {
    if (this.selectedLigne && this.selectedStop) {
      this.router.navigate([
        `/ligne/${this.selectedLigne.Id}/arret/${this.selectedStop.Id}`,
      ]);
    } else {
      console.error('Ligne ou arrêt non sélectionné');
    }
  }

  openLineModal() {
    this.isLineModalOpen = true;
  }

  closeLineModal() {
    this.isLineModalOpen = false;
  }

  confirmSelection() {
    this.closeLineModal();
  }

  selectLine(line: Ligne) {
    this.selectedLigne = {
      Id: 73,
      Short_Name: '101A',
      Long_Name: 'ASNELLES / CAEN',
    };
  }

  openStopModal() {
    this.isStopModalOpen = true;
    console.log('open stop modal');
  }

  closeStopModal() {
    this.isStopModalOpen = false;
  }

  confirmStopSelection() {
    this.closeStopModal();
  }

  selectStop(stop: Arret) {
    this.selectedStop = stop;
  }
}

function filterAndSortStops(stops: Arret[]): Arret[] {
  // Suppression des doublons par "Name"
  const uniqueStops = stops.reduce((acc: Arret[], stop) => {
    if (!acc.find((s) => s.Name === stop.Name)) {
      acc.push(stop);
    }
    return acc;
  }, []);

  // Tri par "hasPOI" (les true d'abord)
  uniqueStops.sort((a, b) => Number(b.hasPOI) - Number(a.hasPOI));

  return uniqueStops;
}
