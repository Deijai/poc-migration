import { Component } from '@angular/core';
//import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  clickedImage: string = '';

  constructor() { }
  public async captureImage() {
     const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      saveToGallery: true,

    });

    this.clickedImage = 'data:image/jpeg;base64,' + image.base64String;

  }

}
