import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'sustantivos-card',
  templateUrl: './sustantivos-card.component.html',
  styleUrl: './sustantivos-card.component.sass'
})
export class SustantivosCardComponent {
    @Input() sustantivo: any;
    @Input() fromSearch = false;
    @ViewChild('sustantivoCard', {static:false}) sustantivoCard: ElementRef<any> | undefined;

    showMore = false;

    convertDivToSnapshot(event: Event) {
        event.preventDefault();
        event.stopPropagation();

        if (this.sustantivoCard && this.sustantivoCard.nativeElement) {
            html2canvas(this.sustantivoCard.nativeElement).then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                // download the image
                const a = document.createElement('a');
                a.href = imgData;
                a.download = this.sustantivo.kana + '.png';
                a.click();
            });
        }
    }
}
