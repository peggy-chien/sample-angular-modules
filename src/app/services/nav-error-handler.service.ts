import { Injectable, inject } from '@angular/core';
import { NavigationError, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavErrorHandlerService {
  private router = inject(Router);

  trackError(err: NavigationError): Promise<boolean> {
    console.log(`NavigationError: ${err}`);
    console.log(`[NavErrorHandler] --> logging to external source...`);

    return this.router.navigate(['page-not-found']);
  }
}
