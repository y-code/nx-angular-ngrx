import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { NavItem, navItems } from './nav-items';

const desktopWindowMinWidth = 992;
const tabletWindowMinWidth = 768;

@Component({
  selector: 'stackblitz-nx-angular-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isDesktop = true;
  isTablet = true;

  title = 'shell';
  navItems = navItems;

  @ViewChild('drawer')
  navDrawer?: MatDrawer;

  initiallyDrawerOpened = false;

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.reset();
    window.onresize = (e) => this.reset();
  }

  toggleMenu() {
    this.navDrawer?.toggle();
  }

  onNavigate() {
    if (!this.isDesktop) this.navDrawer?.close();
  }

  private reset() {
    this.isDesktop = window.innerWidth >= desktopWindowMinWidth;
    this.isTablet = window.innerWidth >= tabletWindowMinWidth;
    if (this.isDesktop) {
      this.initiallyDrawerOpened = true;
    } else if (this.isTablet) {
      this.initiallyDrawerOpened = false;
    } else {
      this.initiallyDrawerOpened = false;
    }
  }
}
