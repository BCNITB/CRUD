import { Component } from '@angular/core';

import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private storage: StorageService) {}

  async fer(){
    await this.storage.set('name', 'Pepe');
    
  }
}
