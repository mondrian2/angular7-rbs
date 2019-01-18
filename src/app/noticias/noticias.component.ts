import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  constructor( public srv: NoticiasService) { }

  noticias: any;

  ngOnInit() {
    this.srv.getNoticias().subscribe(n => {
      this.noticias = n;
    });
  }

}
