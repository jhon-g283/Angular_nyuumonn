import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// Angularのimport

// アプリのimport
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// 開発の切り替え（.envファイルのようなもの）
if (environment.production) {
  enableProdMode();
}

// ブートストラップ
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
