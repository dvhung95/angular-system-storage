import { Injectable } from '@angular/core';
import { ISystemStorageService } from './system-storage-service.interface';

@Injectable({
  providedIn: 'root'
})
export class SystemStorageService implements ISystemStorageService {

  /** PRIVATE PROPERTIES */
  private items: { [key: string]: any } = {};

  /** CONSTRUCTOR */
  constructor() { }

  /** PUBLIC METHODS */
  /**
   * set item
   */
  public setItem(key: string, value: any): void {
    this.items[key] = value;
  }

  /**
   * get item by key
   */
  public getItem(key: string): any {
    return this.items[key];
  }

  /**
   * remove item by key
   */
  public removeItem(key: string): void {
    if (this.items.hasOwnProperty(key)) {
      delete this.items[key];
    }
  }

  /**
   * clear all items
   */
  public clearStorage(): void {
    Object.keys(this.items).forEach((key) => {
      delete this.items[key];
    });
  }
}
