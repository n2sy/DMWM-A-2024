import { RouterModule, Routes } from "@angular/router";
import { HomeAccountComponent } from "./accounts/home-account/home-account.component";
import { AccueilComponent } from "./accueil/accueil.component";
import { AddComponent } from "./add/add.component";
import { CvComponent } from "./cv/cv.component";
import { InfosComponent } from "./infos/infos.component";
import { ManageServersComponent } from "./manage-servers/manage-servers.component";
import { MsWordComponent } from "./ms-word/ms-word.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { UpdateComponent } from "./update/update.component";

const myRoutes: Routes = [
  //Version 3 avec children
  //   { path: "", component: AccueilComponent },
  //   {
  //     path: "cv",
  //     component: CvComponent,
  //     children: [
  //       //   { path: '', component: CvComponent },
  //       { path: "add", component: AddComponent },
  //       {
  //         path: ":id",
  //         children: [
  //           { path: "", component: InfosComponent },
  //           { path: "edit", component: UpdateComponent },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     path: "servers",
  //     loadChildren: () => import("./sub/sub.module").then((m) => m.SubModule),
  //   },
  //   { path: "manage-servers", component: ManageServersComponent },
  //   { path: "login", component: LoginComponent },
  //   { path: "accounts", component: HomeAccountComponent },
  //   { path: "ms-word", component: MsWordComponent },
  //   { path: "not-found", component: NotFoundComponent },
  //   { path: "**", redirectTo: "not-found" },
  // ];

  //Version 2 avec children
  { path: "", component: AccueilComponent },
  {
    path: "cv",
    children: [
      { path: "", component: CvComponent },
      { path: "add", component: AddComponent },
      {
        path: ":id",
        children: [
          { path: "", component: InfosComponent },
          { path: "edit", component: UpdateComponent },
        ],
      },
    ],
  },
  { path: "servers", component: ManageServersComponent },
  { path: "accounts", component: HomeAccountComponent },
  { path: "ms-word", component: MsWordComponent },
  { path: "not-found", component: NotFoundComponent },
  { path: "**", redirectTo: "not-found" },
];

// Version 1 sans children
// { path: '', component: AccueilComponent },
//   { path: 'cv', component: CvComponent },
//   { path: 'cv/add', component: AddComponent },
//   { path: 'cv/:id', component: InfosComponent },
//   { path: 'cv/:id/edit', component: UpdateComponent },
//   { path: 'servers', component: ManageServersComponent },
//   { path: 'accounts', component: HomeAccountComponent },
//   { path: 'ms-word', component: MsWordComponent },
//   { path: 'not-found', component: NotFoundComponent },
//   { path: '**', redirectTo: 'not-found' },

export const DMWM_ROUTING = RouterModule.forRoot(myRoutes);
