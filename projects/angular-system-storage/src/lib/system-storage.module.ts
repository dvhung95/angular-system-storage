import { NgModule } from '@angular/core';
import { SYSTEM_STORAGE_SERVICE_TOKEN } from './injection-tokens.constant';
import { SystemStorageService } from './system-storage.service';

@NgModule({
  providers: [
    {
      provide: SYSTEM_STORAGE_SERVICE_TOKEN,
      useClass: SystemStorageService
    },
  ],
})
export class SystemStorageModule { }
