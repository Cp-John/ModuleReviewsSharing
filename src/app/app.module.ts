import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatDialogModule } from "@angular/material/dialog";
import { ReactiveFormsModule } from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LatestPostsComponent } from './components/latest-posts/latest-posts.component';
import { DataCollectedComponent } from './components/data-collected/data-collected.component';
import { MyModulesComponent } from './components/my-modules/my-modules.component';
import { ModuleComponent } from './components/module/module.component';
import { ModuleListComponent } from './components/module-list/module-list.component';
import { MainBoardComponent } from './components/module-list-subcomponents/main-board/main-board.component';
import { RefinementListComponent } from './components/module-list-subcomponents/refinement-list/refinement-list.component';
import { RefinementTableComponent } from './components/module-list-subcomponents/refinement-table/refinement-table.component';
import { PostReviewComponent } from './components/post-review/post-review.component';
import { ExtraInfoComponent } from './components/post-review-subcomponents/extra-info/extra-info.component';
import { ModuleInfoComponent } from './components/post-review-subcomponents/module-info/module-info.component';
import { ReviewAndRatingsComponent } from './components/post-review-subcomponents/review-and-ratings/review-and-ratings.component';
import { ModuleDescriptionComponent } from './components/module-subcomponents/module-description/module-description.component';
import { QuestionListComponent } from './components/module-subcomponents/question-list/question-list.component';
import { ReviewListComponent } from './components/module-subcomponents/review-list/review-list.component';
import { AdminAccountLoginComponent } from './components/admin-account-login/admin-account-login.component';
import { AdminAccountCreateComponent } from './components/admin-account-create/admin-account-create.component';
import { SelectHeaderImageComponent } from './components/post-review-subcomponents/select-header-image/select-header-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LatestPostsComponent,
    DataCollectedComponent,
    MyModulesComponent,
    ModuleComponent,
    ModuleListComponent,
    MainBoardComponent,
    RefinementListComponent,
    RefinementTableComponent,
    PostReviewComponent,
    ExtraInfoComponent,
    ModuleInfoComponent,
    ReviewAndRatingsComponent,
    ModuleDescriptionComponent,
    QuestionListComponent,
    ReviewListComponent,
    AdminAccountLoginComponent,
    AdminAccountCreateComponent,
    SelectHeaderImageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSliderModule,
    MatCardModule,
    MatDividerModule,
    MatSidenavModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatExpansionModule,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
