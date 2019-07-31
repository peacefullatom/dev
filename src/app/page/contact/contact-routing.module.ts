import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { emptyPath } from 'src/app/const';
import { ContactComponent } from './contact.component';

const contactRoutes: Routes = [{ path: emptyPath, component: ContactComponent }];

@NgModule({
  imports: [RouterModule.forChild(contactRoutes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {}
