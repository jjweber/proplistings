import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  listingObject: any = [];
  listings: any = [];
  listingList: any = [];

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getListings().subscribe(listings => {
      this.listingObject.push(listings);

      for (let index = 0; index < this.listingObject.length; index++) {
        this.listings = this.listingObject[index];

        for (let index2 = 0; index2 < this.listings.length; index2++) {
          const listing = this.listings[index2];
        }
      }
    });
    return this.listings;
  }
}
