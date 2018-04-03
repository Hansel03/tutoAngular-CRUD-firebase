import { Heroe } from './../interfaces/heroe.interfaces';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HeroesService {

    heroesURL = 'https://heroesapp-b3aa4.firebaseio.com/heroes.json';

    constructor(private http: Http) { }

    nuevoHeroe(heroe: Heroe) {
        const body = JSON.stringify(heroe);
        const headers = new Headers({
            'Conten-Type': 'application/json'
        });


        return this.http.post(this.heroesURL, body, { headers })
            .map(res => {
                console.log(res.json());
                return res.json();
            });
    }



}
