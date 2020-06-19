import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];


  constructor() { }

  ngOnInit() {
  }
  totalSatelliteCount(): number {
    let sum: number = 0;
    for (let i = 0; i < this.satellites.length; i++) {
      sum += 1;
    }
    return sum;
  }
  noOfSpaceDebris(): number {
    let DebrisCount: number = 0;
    for (let i = 0; i < this.satellites.length; i++) {
      if (this.satellites[i].type.toLowerCase() === 'space debris') {
        DebrisCount += 1;
      }
    }
    return DebrisCount;
  }
  noOfCommunication(): number {
    let communicationCount: number = 0;
    for (let i = 0; i < this.satellites.length; i++) {
      if (this.satellites[i].type.toLowerCase() === 'communication') {
        communicationCount += 1;
      }
    }
    return communicationCount;

  }
  noOfProbe(): number {
    let probeCount: number = 0;
    for (let i = 0; i < this.satellites.length; i++) {
      if (this.satellites[i].type.toLowerCase() === 'probe') {
        probeCount += 1;
      }
    }
    return probeCount;
  }
  noOfPositioning(): number {
    let positioningCount: number = 0;
    for (let i = 0; i < this.satellites.length; i++) {
      if (this.satellites[i].type.toLowerCase() === 'positioning') {
        positioningCount += 1;
      }
    }
    return positioningCount;
  }
  noOfSpaceStation(): number {
    let spaceStationCount: number = 0;
    for (let i = 0; i < this.satellites.length; i++) {
      if (this.satellites[i].type.toLowerCase() === 'space station') {
        spaceStationCount += 1;
      }
    }
    return spaceStationCount;
  }
  noOfTelescope(): number {
    let telescopeCount: number = 0;
    for (let i = 0; i < this.satellites.length; i++) {
      if (this.satellites[i].type.toLowerCase() === 'telescope') {
        telescopeCount += 1;
      }
    }
    return telescopeCount;
  }




}
