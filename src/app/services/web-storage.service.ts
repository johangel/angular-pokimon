import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE , StorageService } from 'angular-webstorage-service';

@Injectable()
export class WebStorageService {


  public data:any=[]
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  setKey(key, value): void{
    this.storage.set(key,value)
    this.data[key] = this.storage.get(key)
  }

  GetValue(key){
     this.data[key]= this.storage.get(key);
     return this.data[key]
  }
}
