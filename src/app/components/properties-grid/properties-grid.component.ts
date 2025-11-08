import { Component, inject, input, OnInit, signal } from '@angular/core';
import { Room } from '../../models/room';
import { RoomService } from '../../services/room.service';
import { RoomListParams } from '../../models/room-list-params';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-properties-grid',
  imports: [PropertyCardComponent],
  templateUrl: './properties-grid.component.html',
  styleUrl: './properties-grid.component.css',
})
export class PropertiesGridComponent {
  filter = input.required<RoomListParams>();

  // inject RoomService
  private roomService = inject(RoomService);
  rooms = signal<Room[]>([]);

  constructor() {
    toObservable(this.filter)
    .pipe(
      switchMap((f) => this.roomService.list(f)),
      takeUntilDestroyed()
    )
    .subscribe(page =>{
      this.rooms.set(page.content);
    })
    ;
  }

  /*
  //create params
  params: RoomListParams = { page: 0, size: 10, priceMix: null, priceMax: null };

  // load data when statup page, using ngOnInit()
  ngOnInit(): void {
    // call function data
    this.loadData();
    
  }

  //create method loadData
  loadData() {
    //call roomservice
    this.roomService.list(this.params).subscribe((data) => {
      //console.log(data);
      this.rooms.set(data.content)
    });
  }
    */
}
