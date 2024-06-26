import { GifsService } from './../../../gifs/services/gifs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{

  constructor( private gifsService: GifsService ){

  }

  get tags(): string[] {
    return this.gifsService.tagHistory;
  }

  searchTag( tag: string ): void {
    this.gifsService.searchTag( tag );
  }
}
