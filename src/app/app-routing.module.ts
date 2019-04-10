import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { InventoryComponent } from './inventory/inventory.component';

const routes: Routes = [
  { path: '', redirectTo: '/homePage', pathMatch: 'full'},
  { path: 'admin', component: AdminComponent },
  { path: 'app-contact-us', component: ContactUsComponent },
  { path: 'app-inventory', component: InventoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
