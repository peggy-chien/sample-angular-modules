import { Injectable, inject } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';



@Injectable()
export class AppEffects {
  private actions$ = inject(Actions);

}
