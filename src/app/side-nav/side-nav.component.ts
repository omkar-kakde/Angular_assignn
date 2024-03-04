import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Input() isOpen: boolean = true;
  @Output() toggle = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {

  }

  toggleSidebar() {
    this.toggle.emit();
  }
}
