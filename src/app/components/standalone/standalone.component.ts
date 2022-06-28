import { Component, Inject, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ServiceAService } from 'src/app/services/service-a.service';

@Component({
  selector: 'app-standalone',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  providers: [RouterModule],
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.scss'],
})
export class StandaloneComponent implements OnInit {
  injectedEndPoint = '';
  constructor( private service: ServiceAService) {
    this.injectedEndPoint = service.endPoint;
  }

  ngOnInit(): void {}
}
