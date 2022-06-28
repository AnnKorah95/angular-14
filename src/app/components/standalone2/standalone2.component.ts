import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceAService } from 'src/app/services/service-a.service';
import { ServiceBService } from 'src/app/services/service-b.service';

@Component({
  selector: 'app-standalone2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './standalone2.component.html',
  styleUrls: ['./standalone2.component.scss'],
})
export class Standalone2Component implements OnInit {
  injectedEndPoint = '';
  constructor(private service: ServiceAService) {
    this.injectedEndPoint = this.service.endPoint;
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
  }
}
