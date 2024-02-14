import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'verbs-card',
  templateUrl: './verbs-card.component.html',
  styleUrl: './verbs-card.component.sass'
})
export class VerbsCardComponent {
    @Input() verb: any;
    @Input() fromSearch = false;
    @ViewChild('verbCard', {static:false}) verbCard: ElementRef<any> | undefined;

    showMore = false;
    showKei = 0;

    onClickKeiTab(kei: number, event: Event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.showKei === kei) {
            this.showKei = 0;
        } else {
            this.showKei = kei;
        }
    }

    convertDivToSnapshot(event: Event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.verbCard && this.verbCard.nativeElement) {
            html2canvas(this.verbCard.nativeElement).then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                // download the image
                const a = document.createElement('a');
                a.href = imgData;
                a.download = this.verb.kana + '.png';
                a.click();
            });
        }
    }
}
