import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://cdn.shopify.com/s/files/1/0267/2679/3252/files/Limes_Fine_Art_copy_360x.jpg?v=1590365842';
  image3 = 'https://c.stocksy.com/a/kGE900/z9/2199806.jpg';

  constructor() { }

  ngOnInit() {
  }

}