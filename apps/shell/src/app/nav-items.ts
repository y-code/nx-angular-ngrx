export interface NavItem {
  label: string;
  icon: string;
  routerLink: string[];
}

export const navItems: NavItem[] = [
  {
    label: 'Dashboard',
    icon: 'dashboard',
    routerLink: [''],
  },
  {
    label: 'Content A',
    icon: 'menu_book',
    routerLink: ['content-a'],
  },
];
