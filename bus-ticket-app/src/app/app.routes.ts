import { Routes } from '@angular/router';
import { searchComponent } from './pages/search/search';
import { BookingComponent } from './pages/booking/booking';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full'
    },
    {
        path: 'search',
        component: searchComponent
    },
    {
        path: 'booking',
        component: BookingComponent
    }
];
