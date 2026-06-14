import { Component, ElementRef, inject, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-download-file',
  standalone: true,
  imports: [],
  templateUrl: './download-file.component.html',
})
export class DownloadFileComponent {

private renderer:Renderer2=inject(Renderer2);
  


@ViewChild('input') input!:ElementRef
@Input() borderRadius:number=6
@Input() width:number=100
@Input() height:number=6
@Input() accept='.jpg,.gif,.png'
@Input() multiple:boolean=true



ClickUploadPic(){
  // this.renderer.selectRootElement(this.input.nativeElement).click()
}
}
