import { RouterModule, Routes } from "@angular/router";
import { HomeAccountComponent } from "./accounts/home-account/home-account.component";
import { AccueilComponent } from "./accueil/accueil.component";
import { CvComponent } from "./cv/cv.component";
import { InfosComponent } from "./infos/infos.component";
import { ManageServersComponent } from "./manage-servers/manage-servers.component";
import { MsWordComponent } from "./ms-word/ms-word.component";

const myRoutes: Routes = [
  { path: "", component: AccueilComponent },
  { path: "cv", component: CvComponent },
  { path: "cv/:id", component: InfosComponent },
  { path: "servers", component: ManageServersComponent },
  { path: "accounts", component: HomeAccountComponent },
  { path: "ms-word", component: MsWordComponent },
];

export const DMWM_ROUTING = RouterModule.forRoot(myRoutes);
