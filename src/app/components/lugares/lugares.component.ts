import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.scss'],
})
export class LugaresComponent implements OnInit {
  lugares = [];
  constructor(private lugaresService: LugaresService) {}

  ngOnInit() {
    this.getLugares();
  }

  getLugares() {
    this.lugares = this.lugaresService.getLugares();
  }
}
