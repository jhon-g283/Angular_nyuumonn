// 内部のプロジェクト
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { AngularFireModule } from '@angular/fire';
// import { AngularFireAuthModule } from '@angular/fire/auth';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireFunctionsModule, FunctionsRegionToken } from '@angular/fire/functions';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireFunctionsModule } from '@angular/fire/compat/functions';
import { InjectionToken } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShowComponent } from './show/show.component';
import { AddComponent } from './add/add.component';

import { firebaseConfigInfo } from '../../../../work/keyfile';

const routes: Routes = [
  { path: '', component: HomeComponent }, //ホームはホームコンポーネントに遷移させる。
  { path: 'show/:isbn', component: ShowComponent },
  { path: 'add', component: AddComponent },
];

const fire_config = firebaseConfigInfo;
export const FUNCTIONS_REGION = new InjectionToken<string>('FunctionsRegion');

// 必要なインポート取り込み

@NgModule({
  declarations: [AppComponent, HomeComponent, ShowComponent, AddComponent],
  // imports: [BrowserModule, AppRoutingModule],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(fire_config),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireFunctionsModule,
  ],
  providers: [{ provide: FUNCTIONS_REGION, useValue: 'us-central1' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
