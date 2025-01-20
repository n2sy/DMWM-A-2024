import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const addtokenInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.method == 'GET') {
    console.log(req);
    return next(req);
  }

  let token = localStorage.getItem('access_token');
  if (token) {
    let cloneReq = req.clone({
      headers: new HttpHeaders().set('Authorization', `bearer ${token}`),
    });
    console.log(cloneReq);

    return next(cloneReq);
  }
  return next(req);
};
