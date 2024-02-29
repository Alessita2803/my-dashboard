import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/pages/pages/dashboard.component'),
    children:[
        {
            path:'change-detention',
            title: 'Change Detection',
            loadComponent: () => import('./dashboard/pages/pages/change-detention/change-detention.component'),
        },
        {
            path:'control-flow',
            title: 'Control Flow',
            loadComponent: () => import('./dashboard/pages/pages/control-flow/control-flow.component'),
        },
        {
            path:'defer-options',
            title: 'Defer Options',
            loadComponent: () => import('./dashboard/pages/pages/defer-options/defer-options.component'),
        },
        {
            path:'defer-views',
            title: 'Defer Views',
            loadComponent: () => import('./dashboard/pages/pages/defer-views/defer-views.component'),
        },
        {
            path:'user/:id',
            title: 'User View',
            loadComponent: () => import('./dashboard/pages/pages/user/user.component'),
        },
        {
            path:'user-List',
            title: 'User List',
            loadComponent: () => import('./dashboard/pages/pages/users/users.component'),
        },
        {
            path:'view-transition',
            title: 'View Transition',
            loadComponent: () => import('./dashboard/pages/pages/view-transition/view-transition.component'),
        },
        { //COMODIN?
            path: '', redirectTo: 'control-flow', pathMatch: 'full',
        }
    ] // Rutas Hijas
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch:'full'
    }

];
