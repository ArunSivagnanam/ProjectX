import {Component} from 'angular2/core';
import {ShopsService} from './shops.service';
import {AutoGrowDirective} from './auto-grow.directive';

@Component({
    selector: 'shops',
    template: `
        <h2>Butiks tilmelding</h2>
        {{ title }}
        <input type="text" autoGrow />
        <ul>
            <li *ngFor="#shop of shops">
                {{ shop }}
            </li>
        </ul>
        `,
        providers: [ShopsService],
        directives: [AutoGrowDirective]
})
export class ShopsSignupComponent {
    title = "Tilmeld din butik!";
    courses;

    constructor(shopsService: ShopsService) {
        this.courses = shopsService.getShops();
    }
}