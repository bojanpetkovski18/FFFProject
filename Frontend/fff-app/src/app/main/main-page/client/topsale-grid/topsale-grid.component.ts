import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/IProduct';
import { IntercommunicationService } from 'src/app/services/intercommunication.service';

@Component({
  selector: 'app-topsale-grid',
  templateUrl: './topsale-grid.component.html',
  styleUrls: ['./topsale-grid.component.css'],
})
export class TopsaleGridComponent implements OnInit {
  @Input() product!: IProduct;

  constructor(private service: IntercommunicationService) {}

  ngOnInit() {}

  onAddToCart() {
    this.service.deliver(this.product);
  }
}
