import {Component, Input} from '@angular/core';
import {LayoutService} from "../layout.service";
import {MenuService} from "../menu.service";
import {SidebarModule} from "primeng/sidebar";
import {RadioButtonModule} from "primeng/radiobutton";
import {FormsModule} from "@angular/forms";
import {ToggleButtonChangeEvent, ToggleButtonModule} from "primeng/togglebutton";
import {NgClass} from "@angular/common";
import {ButtonDirective} from "primeng/button";
import {ThemeOption, THEMES} from "../themes";
import {ThemeService} from "../theme.service";

@Component({
  selector: 'app-config',
  standalone: true,
  imports: [
    SidebarModule,
    RadioButtonModule,
    FormsModule,
    ToggleButtonModule,
    NgClass,
    ButtonDirective
  ],
  templateUrl: './config.component.html',
  styleUrl: './config.component.scss'
})
export class ConfigComponent {
  @Input() minimal: boolean = false;

  scales: number[] = [12, 13, 14, 15, 16];
  isDark = this.themeService.isThemeDark();

  constructor(
    public layoutService: LayoutService,
    public menuService: MenuService,
    private themeService: ThemeService,
  ) {
  }

  get visible(): boolean {
    return this.layoutService.state.configSidebarVisible;
  }

  set visible(_val: boolean) {
    this.layoutService.state.configSidebarVisible = _val;
  }

  get scale(): number {
    return this.layoutService.config().scale;
  }

  set scale(_val: number) {
    this.layoutService.config.update((config) => ({
      ...config,
      scale: _val,
    }));
  }

  onConfigButtonClick() {
    this.layoutService.showConfigSidebar();
  }

  decrementScale() {
    this.scale--;
  }

  incrementScale() {
    this.scale++;
  }

  changeColorScheme($event: ToggleButtonChangeEvent) {
    const theme: ThemeOption = THEMES[Number($event.checked)];
    this.themeService.changeTheme(theme.theme, theme.color);
  }

}
