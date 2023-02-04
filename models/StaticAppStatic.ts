import { Links } from "./Links";

export class StaticAppState {
    NavigationLinks: Array<Links> = []

    addPage(page: Links): void {
        this.NavigationLinks.push(page);
    }
}