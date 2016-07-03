import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {Push, CloudSettings, provideCloud} from '@ionic/cloud-angular';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '25cbf084',
    'gcm_key': '664083614575'
  }
};

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {

  private rootPage:any;

  constructor(private platform:Platform) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      
      var raja = new Push({
        pluginConfig: {
          android: {
          senderID: "664083614575"
        }
        }
      })
      
      raja.register((token) => {
        raja.saveToken(token);
      })
      
      
      
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp, [provideCloud(cloudSettings)])
