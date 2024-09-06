import {computed, Injectable, Signal} from '@angular/core';
import {LayoutService} from './layout.service';
import {LocalStorageService} from "./local.storage.service";

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isThemeDark: Signal<boolean> = computed(
    () => this.layoutService.config().colorScheme === 'dark'
  );

  constructor(
    private layoutService: LayoutService,
    private localStorageService: LocalStorageService
  ) {
  }

  changeTheme(theme: string, colorScheme: string) {
    this.layoutService.config.update((config) => ({
      ...config,
      theme: theme,
      colorScheme: colorScheme,
    }));
    this.localStorageService.setItem('theme', {
      theme: theme,
      color: colorScheme,
    });
  }
}
