# Angular System Storage

Angular System Storage is a library what provides storage on Angular programme. Indeed, **systemStorage** is similar to **localStorage**, however, systemStorage will be cleared when page is reloaded or a tab/window ends.

## Table of contents

* [Installation](#installation)
* [Usage](#Usage)

## Installation

Use the package manager [NPM](https://www.npmjs.com/) to install Angular System Storage.

```bash
npm install angular-system-storage
```

## Usage

1. Import `SystemStorageModule` once only in `AppModule`
```typescript
import { SystemStorageModule } from "system-storage";

@NgModule({
  imports: [
    SystemStorageModule
  ],
})
export class AppModule { }
```

2. Inject `SystemStorageService` in component that uses system storage
```typescript
import { ISystemStorageService, SYSTEM_STORAGE_SERVICE_TOKEN } from 'system-storage';

export class TestComponent {
  constructor(
    @Inject(SYSTEM_STORAGE_SERVICE_TOKEN) private systemStorage: ISystemStorageService,
  ) { }
}
```

3. Available methods of `systemStorage`
```typescript
// save data to systemStorage
systemStorage.setItem('key', value);

// get saved data from systemStorage
let data = systemStorage.getItem('key');

// remove saved data from systemStorage
systemStorage.removeItem('key');

// remove all saved data from systemStorage
systemStorage.clearStorage();
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://github.com/dvhung95/angular-system-storage/blob/master/LICENSE)