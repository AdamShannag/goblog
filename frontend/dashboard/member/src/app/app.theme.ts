import {LocalStorageService} from "./layout/local.storage.service";
import {ThemeService} from "./layout/theme.service";
import {ThemeOption, THEMES} from "./layout/themes";

export const appThemeInit = (localStorageService: LocalStorageService, themeService: ThemeService) => {
  return () => new Promise<void>((resolve, _) => {
    const theme = localStorageService.getItem('theme') as ThemeOption;
    if (isValidTheme(theme)) {
      themeService.changeTheme(theme.theme, theme.color);
      resolve();
      return;
    }
    resolve();
  });
}


const isValidTheme = (theme: ThemeOption): boolean => {
  if (theme === null) return false;
  return (
    THEMES.find((th) => {
      return th.theme === theme.theme && th.color === theme.color;
    }) !== undefined
  );
};
