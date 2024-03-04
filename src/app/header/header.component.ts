import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isOpen: boolean = true;
  @Output() toggle = new EventEmitter<void>();

  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  toggleSidebar() {
    this.toggle.emit();
  }


}
