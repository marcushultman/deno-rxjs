import '@angular/compiler'
import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './app/app.module'
import { environment } from './environments/environment'

if (environment.production) {
    enableProdMode()
}

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err))

console.log(
    `%c\n _____            _  _____
|  __ \\          | |/ ____|
| |__) |__  __   | | (___
|  _  / \\ \\/ /   | |\\___ \\
| | \\ \\  >  < |__| |____) |
|_|  \\_\\/_/\\_\\____/|_____/
A reactive programming library for Deno\n\n`,
    'font-family:monospace'
)
console.log(
    `%c\n     _                  _
    | |                | |
  __| | ___ _ __   ___ | |__  _ __
 / _' |/ _ \\ '_ \\ / _ \\| '_ \\| '__|
| (_| |  __/ | | | (_) | |_) | |
 \\__,_|\\___|_| |_|\\___/|_.__/|_|
 Comunidade DenoBR denobr.com\n\n`,
    'font-family:monospace'
)
