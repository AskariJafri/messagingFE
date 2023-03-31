import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { InfoComponent } from './info/info.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:"",component:InfoComponent},
  {path:"user",component:UserComponent},
  {path:"chat-room",component:ChatRoomComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
