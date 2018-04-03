import { Heroe } from './../../interfaces/heroe.interfaces';
import { Component, OnInit } from '@angular/core';
import { HeroesService } from './../../services/heroes.service';


@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styles: []
})
export class HeroesComponent implements OnInit {

    heroes: any[];

    constructor(private _heroesService: HeroesService) {

        this._heroesService.getHeroes()
            .subscribe(data => {
                console.log(data);
                this.heroes = data;

            });
    }

    ngOnInit() {
    }




    borrarHeroe(key$: string) {
        this._heroesService.deleteHeroe(key$)
            .subscribe(data => {
                console.log(data);
                if (data.status === 200) {
                    /*Eliminamos un atributo del objeto */
                    delete this.heroes[key$];
                }
            });
    }




}
