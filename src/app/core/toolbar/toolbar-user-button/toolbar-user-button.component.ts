import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DefaultLayoutService, ToolbarUserButtonOptions } from '../../layout/layout.settings';

@Component({
  selector: 'vr-toolbar-user-button',
  templateUrl: './toolbar-user-button.component.html',
  styleUrls: ['./toolbar-user-button.component.scss']
})
export class ToolbarUserButtonComponent implements OnInit, AfterViewInit {

  isOpen: boolean;
  options: ToolbarUserButtonOptions;

  constructor(layout: DefaultLayoutService) {
    this.options = layout.options.toolbarUserButton;

    // Set defaut image if don't provide custom path
    if (this.options.imagePath == undefined || this.options.imagePath === '') {
      this.options.imagePath = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAAAAACIM/FCAAAETElEQVRo3u3bXXebOBCA4f7/v2W5oWA7DvTYsQPGxAdTmsqlwKE0Tpjd+24/ENJoMqv3Lnd5ThyDpNG72cjEDDvx80//8Uu8mzHJQRzEQRzEQRzEQRzEQRzEQRzEQRzEQRzEQRzEQRzEQRzEQRzEQTQlVtu0kE1/HWC49o0s0u1KvDnIOik7+LmuTNZvCBJmFfy6KgvfBMSP5QC/b5CxTx2yPDbwNzXHJWVIkLbwt7VpQBUi9hWMqdoLkpC7EsZW3hGExC2Mr42pQYIc1MoDUpBQgmoyJATZ1KBevSED2XUwpW5HBLLvYVr9ngRkN9Xxr2RHALLpYHrdxjokrEFHdWgZEkjQkwzsQnLQVW4VEoO+YouQu1YjpL2zBhEl6KwUtiB70NveEiSoNEOqwA4kBd2lViDLVjukXdqAHEF/RwsQvzEAaXx8SAwmivEh0ghEokPCwQhkCLEhGZgpw4ZUhiAVMmQNplrjQhJjkAQXUhqDlKgQ0RmDdAITsgJzrTAhW4OQLSYkNQhJMSGFQUiBCZEGIRIT0hiENJiQ3iCkx4RcDUKumJDBIGTAhIDJ3F/k//w/wuZbi81zhM2Tnc27Fpu3XzbrETYrRDZrdja7KHz2tdjsNLLZ++WzG8/mfITNiRWfM0Q2p7psztn5TD6wmUXhMx3EZl6LzwQdm5lGPlOmfOZ++Uxis5mN53Nbgc/9ET43evjcseJz643PPUQ+N0NnbO7qzvjcnh5/n70hep999n779DIG8lxu3xOELFOFlW+VLolBbk+KD8XudEsIcnua8JbSa6JMhyyyiS/AXbYgAJnHGlYkdTy3DYk+61khfo6sQryjtvGa/ujZg0RfdO5rfYksQUSi+bS9S4QNyOKs/1jhvMCHREbO3mSEDblvwUjtPS4keTY1MPCcIELmmcEx0yGbY0FuTmC00w0OxMvBcLmHAfHOYLyzZx5ykwNC+Y1piDgBSidhGJIBUplZSPKKBXlNTELufwBaP+7NQaIWEGsjU5CFBNTkwgxEnAG5szACOQB6BxOQj9/xId8/6of4Eiwkfe2QE1jppBuyvdqBXLd6If4FLHXxtUIysFamExL29iB9qBFSgsVKfZAdWG2nC+Jd7EIuniZIApZL9ECC2jakDrRAUrBeqgMSNPYhTaABcgACHaZDvJoCpPYmQx6ARA9TIULSgEgxEbIBIm0mQgoqkGIaZNlTgfTLSZADkOkwCXKhA7lMgURAqGgC5JES5FEdIr5RgnwTyhBSn6w/fbbe0dw7Gb+f8jvIV1qQr6qQ1SstyOtKEfIAxHpQhHyiBvmkBpm31CDtXAmyBnKtlSAxPUisBCnoQQolSE0PUqtA/Bd6kBdfARIBwSIFSEwREitAcoqQXAFyoQi5KEA6ipBuPOTDQBEyfBgNWQPJ1qMhG5qQzWhITBMSj4Y80oQ8joYUNCHFaMgTTcjTaEhFE1KNhjQ0Ic0vIf8A2crlPSgh944AAAAASUVORK5CYII='
    }
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onClickOutside() {
    this.isOpen = false;
  }
}

