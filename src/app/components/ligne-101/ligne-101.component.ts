import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';

import { PointDInteret } from '../../interfaces/point-d-interet';
@Component({
  selector: 'app-ligne-101',
  standalone: true,
  imports: [AccordionModule, CommonModule, CardModule],
  templateUrl: './ligne-101.component.html',
  styleUrl: './ligne-101.component.css',
})
export class Ligne101Component {
  poi: PointDInteret[] = [
    {
      Id: 1,
      Name: 'Basilique Notre-Dame de la Délivrande',
      Description:
        "Magnifique basilique néo-gothique, construite entre 1854 et 1878<br />- Observez les deux flèches s'élevant à 48 mètres de hauteur<br />- Le site est un lieu de pèlerinage depuis le XIe siècle<br />- Admirez la statue de la Vierge Noire, réplique de la statue originale du XIe siècle<br />",
      Latitude: 0,
      Longitude: 0,
      Image:
        'https://upload.wikimedia.org/wikipedia/commons/a/ac/Basilique_Notre-Dame_de_la_D%C3%A9livrande.jpg',
    },
    {
      Id: 2,
      Name: 'Place des Marronniers',
      Description:
        "- Centre-ville historique avec son architecture normande caractéristique. Notez les marronniers qui donnent leur nom à la place. Marché local le jeudi matin. Repérez l'ancienne pompe à eau, té",

      Latitude: 0,
      Longitude: 0,
      Image:
        'https://www.douvres-la-delivrande.fr/images/PM%20(1).jpg?1583504616304',
    },
    {
      Id: 3,
      Name: 'La Baronnie',
      Description:
        "- Ce manoir du XVIIe siècle était autrefois la résidence des Prieurs de l'Abbaye de Caen. Admirez la belle architecture en pierre et le jardin à la française. Abrite aujourd'hui l'office de tourisme et le centre culturel",
      Latitude: 0,
      Longitude: 0,
      Image: 'https://www.douvres-la-delivrande.fr/images/la-baronnie.jpg',
    },
  ];
}
