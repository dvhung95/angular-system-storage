import { InjectionToken } from "@angular/core";
import { ISystemStorageService } from "./system-storage-service.interface";

export const SYSTEM_STORAGE_SERVICE_TOKEN
  = new InjectionToken<ISystemStorageService>('SYSTEM_STORAGE_SERVICE_TOKEN');