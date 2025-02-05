import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { EbookPurchaseRedirectService } from '../services/ebookPurchaseRedirect.service';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export const ebookSelectedGuard: ResolveFn<boolean | null> = (route, __) => {
  const router = inject(Router);
  const ebookPurchaseRedirectService = inject(EbookPurchaseRedirectService);

  const ebookId = route.paramMap.get('id');

  if (!ebookId) {
    router.navigate(['/ebook-not-found']);
    return of(null);
  }

  return ebookPurchaseRedirectService.selectEbook(ebookId).pipe(
    map((ebook) => {
      if (ebook) {
        return true;
      } else {
        router.navigate(['/ebook-not-found']);
        return null;
      }
    }),
    catchError(() => {
      router.navigate(['/ebook-not-found']);
      return of(null);
    })
  );
};
