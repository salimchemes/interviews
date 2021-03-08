import { Component, OnInit } from '@angular/core';
import { JavascriptService } from 'src/app/services/javascript.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.scss'],
})
export class JavascriptComponent implements OnInit {
  constructor(public javascriptService: JavascriptService) {}

  ngOnInit(): void {}
}
