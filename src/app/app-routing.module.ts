import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { InventoryComponent } from './inventory/inventory.component';
import { HomepageComponent } from './homepage/homepage.component';
const routes: Routes = [
  { path: '', redirectTo: 'app-homepage', pathMatch: 'full'},
  { path: 'admin', component: AdminComponent },
  { path: 'app-contact-us', component: ContactUsComponent },
  { path: 'app-inventory', component: InventoryComponent },
  { path: 'app-homepage', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
