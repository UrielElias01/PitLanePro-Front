import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private toastr: ToastrService,private router: Router) { }

  msjError(e: HttpErrorResponse) {
    if (e.error.msg) {
      this.toastr.error(e.error.msg, 'Error');
    } else if (e.status === 500) {
      this.toastr.error('Ocurrió un error interno del servidor (500)', 'Error');
      this.router.navigate(['/500']);
    } else {
      this.toastr.error('Upps ocurrió un error, comuníquese con el administrador', 'Error');
    }
  }
}
