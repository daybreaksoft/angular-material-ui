import { Injectable } from '@angular/core';
import { SidenavItem } from '../sidenav/sidenav-item/sidenav-item.model';

export interface LayoutOptions {
    logoPath?: LogoPaths;
    menus?: SidenavItem[];
    quickpanel: QuickpanelOptions;
    toolbarUserButton: ToolbarUserButtonOptions;
    toolbarNotification: ToolbarNotificationOptions;
    toolbarSearch: ToolbarSearchOptions;
}

export interface LogoPaths {
    toolbarAlpha?: string;
    toolbarBeta?: string;
    toolbarGamma?: string;
    sidenav?: string;
}

export interface QuickpanelOptions {
    enabled: boolean;
}

export interface ToolbarUserButtonItem {
    name?: string;
    icon?: string;
    router?: string;
    isDivider: boolean
}

export interface ToolbarUserButtonOptions {
    enabled: boolean;
    imagePath?: string;
    username?: string;
    buttons?: ToolbarUserButtonItem[];
}

export interface ToolbarNotificationOptions {
    enabled: boolean;
}

export interface ToolbarSearchOptions {
    enabled: boolean;
}

@Injectable()
export class DefaultLayoutService {

    public get options(): LayoutOptions {
        return {
            quickpanel: { enabled: true },
            toolbarUserButton: { enabled: true },
            toolbarNotification: { enabled: true },
            toolbarSearch: { enabled: true }
        };
    }
}
