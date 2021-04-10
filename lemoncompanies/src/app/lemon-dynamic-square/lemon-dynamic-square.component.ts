import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-lemon-dynamic-square',
  templateUrl: './lemon-dynamic-square.component.html',
  styleUrls: ['./lemon-dynamic-square.component.scss'],
})
export class LemonDynamicSquareComponent implements AfterViewInit, OnInit {
  @ViewChild('myCanvas', { static: false })
  canvas!: ElementRef<HTMLCanvasElement>;

  colorPink = '#ff01ff';
  colorOrange = '#ff7e7e';
  colorPurple = '#7e7eff';
  colorYellow = '#ffff7e';
  colorBlue = '#7effff';
  selectedColor = this.colorPink;
  showContextMenu = false;
  isDrawing = false;
  // setting a width and height for the canvas
  @Input() public width = 1000;
  @Input() public height = 600;
  public context: CanvasRenderingContext2D | undefined;

  ngOnInit() {}

  public ngAfterViewInit() {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    const res = this.canvas.nativeElement.getContext('2d');
    if (!res || !(res instanceof CanvasRenderingContext2D)) {
      throw new Error('Failed to get 2D context');
    }

    canvasEl.width = this.width;
    canvasEl.height = this.height;
    this.drawGrid(canvasEl, 10, 100, 60);
  }

  private drawGrid(
    canvasEl: HTMLCanvasElement,
    sizeSquare: number,
    width: number,
    height: number
  ) {
    for (let indexRow = 0; indexRow < width; indexRow++) {
      for (let indexCol = 0; indexCol < height; indexCol++) {
        this.drawSquare(
          canvasEl,
          indexRow * sizeSquare,
          indexCol * sizeSquare,
          sizeSquare
        );
      }
    }
  }

  private drawSquare(
    canvasEl: HTMLCanvasElement,
    posX: number,
    posY: number,
    sizeSquare: number
  ) {
    const res = canvasEl.getContext('2d');
    if (!res || !(res instanceof CanvasRenderingContext2D)) {
      throw new Error('Failed to get 2D context');
    }
    res.beginPath();
    res.fillStyle = '#ffffff'
    res.rect(posX, posY, sizeSquare, sizeSquare);
    res.lineWidth = 0.2;
    res.stroke();
  }

  private fillSquare(
    canvasEl: HTMLCanvasElement,
    posX: number,
    posY: number,
    sizeSquare: number
  ) {
    const res = canvasEl.getContext('2d');
    if (!res || !(res instanceof CanvasRenderingContext2D)) {
      throw new Error('Failed to get 2D context');
    }

    var p = res.getImageData(posX, posY, 1, 1).data;
    var hex = '#' + ('000000' + this.rgbToHex(p[0], p[1], p[2])).slice(-6);

    res.beginPath();
    if ((hex === '#ffffff') || (hex === '#000000')) {
      res.fillStyle = this.selectedColor;
    } else {
      res.fillStyle = '#ffffff';
    }
    res.lineWidth = 0.2;
    res.stroke();
    res.fillRect(posX, posY, sizeSquare, sizeSquare);

  }

  rgbToHex(r: number, g: number, b: number): string {
    if (r > 255 || g > 255 || b > 255) throw 'Invalid color component';
    return ((r << 16) | (g << 8) | b).toString(16);
  }

  contextMenuStart() {
    this.showContextMenu = true;
    return false;
  }

  changeSelectColor(selectColor: string) {
    this.selectedColor = selectColor;
    this.showContextMenu = false;
  }


  drawCanvas(event: any){
    if (this.showContextMenu) this.showContextMenu = false;
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    const res = canvasEl.getContext('2d');
    if (!res || !(res instanceof CanvasRenderingContext2D)) {
      throw new Error('Failed to get 2D context');
    }
    const layerX = event.layerX;
    const layerY = event.layerY;
    const newPointX = layerX - (layerX % 10);
    const newPointY = layerY - (layerY % 10);
    this.fillSquare(canvasEl, newPointX, newPointY, 10);
  }

  mouseDown(event: any) {
    this.isDrawing = true;
  }

  mouseUp(event: any) {
    this.drawCanvas(event);
    this.isDrawing = false;
  }

  mouseMove(event: any) {
    if (this.isDrawing === true) {
      this.drawCanvas(event);
    }
  }

}
