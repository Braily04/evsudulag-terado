import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RoutesModule } from "./routes.module";
import { MaterialModule } from "./material.module";
import { LoginComponent } from "./pages/login/login.component";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { DetailComponent } from "./pages/detail/detail.component";

@NgModule({
    declarations: [ LoginComponent, DetailComponent ],
    imports: [
        CommonModule,
        RoutesModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class UsersModule {}