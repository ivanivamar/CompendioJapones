import {Component, Input} from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.sass'
})
export class SearchComponent {
    @Input() verbos: any;
    @Input() articulos: any;
    @Input() adjetivos: any;

    search = '';
    filters: string[] = ['verbos', 'adjetivos', 'articulos'];
    active = false;
    searchResults: any[] = [];
    hasVerbs = false;
    hasAdjetivos = false;
    hasArticulos = false;

    constructor() {
    }

    onInputSearch() {
        this.searchResults = [];
        this.hasVerbs = false;
        this.hasAdjetivos = false;
        this.hasArticulos = false;
        if (this.search.trim().length > 0) {
            if (this.filters.includes('verbos')) {
                this.verbos.forEach((verbo: any) => {
                    if (
                        verbo.romanji.toLowerCase().includes(this.search.toLowerCase()) ||
                        verbo.translation.toLowerCase().includes(this.search.toLowerCase()) ||
                        verbo.kana.toLowerCase().includes(this.search.toLowerCase())) {
                        this.searchResults.push({
                            type: 'verbo',
                            data: verbo
                        });
                        this.hasVerbs = true;
                    }
                });
            }
            /*if (this.filters.includes('articulos')) {
                this.articulos.forEach((articulo: any) => {
                    if (articulo.romanji.includes(this.search) || articulo.translation.includes(this.search) || articulo.kana.includes(this.search)) {
                        this.searchResults.push({
                            type: 'articulo',
                            data: articulo
                        });
                        this.hasArticulos = true;
                    }
                });
            }*/
        }
    }

    clearSearch() {
        this.search = '';
        this.searchResults = [];
        this.hasVerbs = false;
        this.hasAdjetivos = false;
        this.hasArticulos = false;
    }
}
