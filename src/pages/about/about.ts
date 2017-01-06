import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AngularFire, FirebaseObjectObservable} from 'angularfire2';

@Component({
    selector: 'page-about',
    templateUrl: 'about.html'
})
export class AboutPage {
    af: AngularFire;
    item: FirebaseObjectObservable<any>;
    count: number;

    constructor(public navCtrl: NavController, af: AngularFire) {
        this.af = af;
        this.count = 1;
        this.item = this.af.database.object('/items/item1');
    }

    clicked(event) {
        this.item.set({name: 'new name!' + this.count++});
    }
}
