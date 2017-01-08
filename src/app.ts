// Hello world

import * as _ from "lodash";
import { Print } from "./print";

class App {
    public static main(): boolean {
        const arr = ["Hello", "world", "!"];
        const message = _.join(arr, " ");
        Print.toConsole(message);
        return true;
    }
}

App.main();
