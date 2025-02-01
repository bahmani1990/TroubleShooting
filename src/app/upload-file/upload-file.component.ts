import { Component, ElementRef, input, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  standalone: true,
  imports: [],
  templateUrl: './upload-file.component.html',
  styleUrl: './upload-file.component.css'
})
export class UploadFileComponent {

  constructor(
    public renderer:Renderer2
  ){}
  
@ViewChild('input') input!:ElementRef

@Input() borderStyle:string='dashed'
@Input() borderRadius:number=6
@Input() width:number=100
@Input() height:number=40
@Input() accept='.jpg,.gif,.png'
@Input() multiple:boolean=true



ClickUploadPic(){
  this.renderer.selectRootElement(this.input.nativeElement).click()
}
}
