import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./app-routing.module";
import { StoreModule } from "@ngrx/store";
import { metaReducers, reducers } from "./+state/app.reducer";
import { EffectsModule } from "@ngrx/effects";
import { AppEffects } from "./+state/app.effects";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./service/in-memory-data.service";
import { environment } from "src/environments/environment";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      StoreModule.forRoot(reducers, { metaReducers }),
      !environment.production ? StoreDevtoolsModule.instrument() : [],
      EffectsModule.forRoot([AppEffects]),
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    ),
  ],
};