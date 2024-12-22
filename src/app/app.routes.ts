import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { WhitepaperComponent } from './whitepaper/whitepaper.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'whitepaper',
        component: WhitepaperComponent
    }
];
