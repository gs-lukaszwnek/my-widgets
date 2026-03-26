import { createApplication } from "@angular/platform-browser";
import { provideZonelessChangeDetection } from "@angular/core";
import {
  AppComponent,
  WIDGET_SDK,
  WIDGET_SERVICE_SDK,
} from "./app/app.component";
import type { WidgetSDK } from "./types";

let initialized = false;

export async function init(sdk: WidgetSDK) {
  if (initialized) return;
  initialized = true;
  await sdk.whenReady();
  const widgetServiceSdk = new window.WidgetServiceSDK();
  const host = document.createElement("my-angular-widget-root");
  const appRef = await createApplication({
    providers: [
      provideZonelessChangeDetection(),
      { provide: WIDGET_SDK, useValue: sdk },
      { provide: WIDGET_SERVICE_SDK, useValue: widgetServiceSdk },
    ],
  });
  appRef.bootstrap(AppComponent, host);
  sdk.getContainer().appendChild(host);
  sdk.on("destroy", () => {
    initialized = false;
    appRef.destroy();
    host.remove();
  });
}
