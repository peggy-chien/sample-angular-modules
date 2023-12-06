import { ApplicationConfig, importProvidersFrom, inject } from "@angular/core";
import { NavigationError, provideRouter, withNavigationErrorHandler } from "@angular/router";
import { routes } from "./app-routing.module";
import { StoreModule } from "@ngrx/store";
import { metaReducers, reducers } from "./+state/app.reducer";
import { EffectsModule } from "@ngrx/effects";
import { AppEffects } from "./+state/app.effects";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./services/in-memory-data.service";
import { environment } from "src/environments/environment";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { NavErrorHandlerService } from "./services/nav-error-handler.service";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withNavigationErrorHandler((e: NavigationError) => inject(NavErrorHandlerService).trackError(e))),
    importProvidersFrom(
      StoreModule.forRoot(reducers, { metaReducers }),
      !environment.production ? StoreDevtoolsModule.instrument() : [],
      EffectsModule.forRoot([AppEffects]),
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    ),
  ],
};