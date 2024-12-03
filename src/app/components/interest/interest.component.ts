import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router'; // Importer ActivatedRoute
import { POI } from '../../data/poi';
import { PointsArret } from '../../interfaces/point-d-interet';
import { CardModule } from 'primeng/card';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-interest',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './interest.component.html',
  styleUrl: './interest.component.css',
})
export class InterestComponent {
  stopPois: PointsArret[] = POI;
  poi!: PointsArret | undefined;
  safeMapUrl?: SafeResourceUrl;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    const stopId = Number(this.route.snapshot.paramMap.get('arretId'));

    this.poi = this.stopPois.find((point) => point.Arret.Id === stopId);
    if (this.poi) {
      // Sanitize l'URL de la carte
      this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.poi.MapUrl
      );
    }

    if (!this.poi) {
      console.error('Aucun point d’arrêt trouvé pour cet ID:', stopId);
    }
  }
}
