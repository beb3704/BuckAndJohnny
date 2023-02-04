import { Links } from "~~/models/Links";
import { StaticAppState } from "~~/models/StaticAppStatic";

export default function () {
    return useState('staticAppState',
        (): StaticAppState => {
            const appState = new StaticAppState();

            appState.addPage(new Links("Home", "/"))
            appState.addPage(new Links("Contact", "/contact"))

            return appState;
        })
}