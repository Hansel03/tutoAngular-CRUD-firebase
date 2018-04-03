import { Heroe } from './../interfaces/heroe.interfaces';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HeroesService {

    heroes = 'https://heroesapp-b3aa4.firebaseio.com/heroes.json';
    heroeUrl = 'https://heroesapp-b3aa4.firebaseio.com/heroes/';

    constructor(private http: Http) { }

    nuevoHeroe(heroe: Heroe) {
        const body = JSON.stringify(heroe);
        const headers = new Headers({
            'Conten-Type': 'application/json'
        });


        return this.http.post(this.heroes, body, { headers })
            .map(res => {
                console.log(res.json());
                return res.json();
            });
    }

    actualizarHeroe(heroe: Heroe, key$: string) {

        const url = `${this.heroeUrl}/${key$}.json`;

        const body = JSON.stringify(heroe);
        const headers = new Headers({
            'Conten-Type': 'application/json'
        });


        return this.http.put(url, body, { headers })
            .map(res => {
                console.log(res.json());
                return res.json();
            });
    }


    getHeroe(key$: string) {
        const url = `${this.heroeUrl}/${key$}.json`;
        const headers = new Headers({
            'Conten-Type': 'application/json'
        });

        return this.http.get(url)
            .map(res => res.json());
    }



}
