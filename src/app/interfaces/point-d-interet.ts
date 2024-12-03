import { Arret } from './arret';

export interface PointDInteret {
  Id: number;
  Name: string;
  Description: string;
  Latitude: number;
  Longitude: number;
  Image: string;
}

export interface PointsArret {
  Arret: Arret;
  MapUrl: string;
  PointsDInteret: PoiJSON[];
}

export interface PoiJSON {
  Reference: string;
  Denomination_de_l_edifice: string;
  Commune_forme_index: string;
  Historique: string | null;
  Lien_vers_la_base_archiv_mh: string;
  ImageURL: string;
  Coordonnees_au_format_wgs84: {
    Lon: number;
    Lat: number;
  };
}
