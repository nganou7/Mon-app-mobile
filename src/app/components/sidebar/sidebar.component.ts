import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'Mon profil',  icon:'person', class: '' },
    { path: '/table-list', title: 'Patient',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Medecin',  icon:'library_books', class: '' },
    { path: '/maps', title: 'Géolocalisation',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/upgrade', title: 'Camera',  icon:'unarchive', class: '' },
    { path: '/icons', title: 'Enregistrer',  icon:'bubble_chart', class: '' },
    { path: '/sms', title: 'Message',  icon:'bubble_chart', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
