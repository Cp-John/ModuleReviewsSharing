import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LatestPostsComponent } from './components/latest-posts/latest-posts.component';
import { MyModulesComponent } from './components/my-modules/my-modules.component';
import { ModuleComponent } from './components/module/module.component';
import { ModuleListComponent } from './components/module-list/module-list.component';
import { PostReviewComponent } from './components/post-review/post-review.component';
import { ModuleDescriptionComponent } from './components/module-subcomponents/module-description/module-description.component';
import { QuestionListComponent } from './components/module-subcomponents/question-list/question-list.component';
import { ReviewListComponent } from './components/module-subcomponents/review-list/review-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'ModuleList', component: ModuleListComponent},
  {path: 'PostReview', component: PostReviewComponent},
  {path: 'LatestPosts', component: LatestPostsComponent},
  {path: 'Module', component: ModuleComponent, children: [
    {path: 'Description', component: ModuleDescriptionComponent},
    {path: 'QuestionList', component: QuestionListComponent},
    {path: 'ReviewList', component: ReviewListComponent},
  ]},
  {path: 'MyModules', component: MyModulesComponent},
  {path: 'Module', redirectTo: 'Module/Description'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
