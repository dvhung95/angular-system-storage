import { Injectable } from '@angular/core';
import { ISystemStorageService } from './system-storage-service.interface';

@Injectable({
  providedIn: 'root'
})
export class SystemStorageService implements ISystemStorageService {
  /** PRIVATE PROPERTIES */
  private _items: { [key: string]: any } = {};

  /** PUBLIC METHODS */
  /**
   * set item
   */
  public setItem(key: string, value: any): void {
    this._items[key] = value;
  }

  /**
   * get item by key
   */
  public getItem(key: string): any {
    return this._items[key];
  }

  /**
   * remove item by key
   */
  public removeItem(key: string): void {
    if (this._items.hasOwnProperty(key)) {
      delete this._items[key];
    }
  }

  /**
   * clear all items
   */
  public clearStorage(): void {
    this._items = {};
  }
}
