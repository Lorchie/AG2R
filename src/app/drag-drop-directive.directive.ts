import { Directive, Output, Input, EventEmitter, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDragDropDirective]'
})
export class DragDropDirectiveDirective {
  @Output() fileDropped = new EventEmitter<any>();

  @HostBinding('style.background-color') private background = '#f5fcff';
  @HostBinding('style.opacity') private opacity = '1';


  // Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(evt: any): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#9ecbec';
    this.opacity = '0.8';
  }
  // Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(evt: any): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#f5fcff';
    this.opacity = '1';
  }
  // Drop listener
  @HostListener('drop', ['$event']) public ondrop(evt: any): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#f5fcff';
    this.opacity = '1';
    const files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.fileDropped.emit(files);
    }

  }

}
