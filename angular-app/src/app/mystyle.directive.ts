import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMystyle]',
})
export class MystyleDirective {
  private el: ElementRef;
  // コンポーネントから値を受け取れるようにInputを準備
  @Input() c: string = 'blue';
  @Input() bg: string = '#eef';

  constructor(el: ElementRef) {
    // コンストラクタ内で受け取ったElementをこのコンポにする
    this.el = el;
  }

  ngOnInit() {
    // ngOnInit内で受け取った値をスタイルとして設定
    this.el.nativeElement.style.color = this.c;
    this.el.nativeElement.style.backgroundColor = this.bg;
  }
}
