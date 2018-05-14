import { Directive, ElementRef, Renderer2, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
    selector: 'button[dbs-button-submitting]',
    host: {
        '[disabled]': 'submitting'
    }
})
export class ButtonSubmittingDirective {

    @Input('dbs-button-submitting') submitting: boolean;

    constructor(private elementRef: ElementRef) {
    }

    public ngOnChanges(changes: SimpleChanges) {
        let submittingChange = changes['submitting'];
        if (submittingChange != undefined && !submittingChange.firstChange) {
            if (this.isGeneralButton()) {
                this.changeButtonText(submittingChange.currentValue === true);
            } else {
                this.changeMaterialButtonText(submittingChange.currentValue === true);
            }
        }
    }

    private isGeneralButton(): boolean {
        let innerHtml: string = this.elementRef.nativeElement.innerHTML;
        return innerHtml.indexOf('mat-button-wrapper') === -1;
    }

    /**
     * Change general buttons text
     */
    private changeButtonText(submitting: boolean) {
        let buttonText: string = this.elementRef.nativeElement.innerHTML;
        if (submitting) {
            this.elementRef.nativeElement.innerHTML = buttonText + ' ...';
        } else {
            this.elementRef.nativeElement.innerHTML = buttonText.substring(0, buttonText.length - 4);
        }
    }

    /**
     * Change material buttons text
     * @param submitting 
     */
    private changeMaterialButtonText(submitting: boolean) {
        let buttonTextSpan = this.elementRef.nativeElement.querySelector('span');
        let buttonText: string;
        if (buttonTextSpan) {
            buttonText = buttonTextSpan.innerHTML;

            if (submitting) {
                buttonTextSpan.innerHTML = buttonText + ' ...';
            } else {
                buttonTextSpan.innerHTML = buttonText.substring(0, buttonText.length - 4);
            }
        }
    }
}
