// Hello world

import * as fs from "fs";
import * as _ from "lodash";
import { Print } from "./print";

class App {
    public static main(): boolean {
        const arr = ["Hello", "world", "!"];
        const message = _.join(arr, " ");

        fs.readFile("./tslint.json", "utf8", (err, data) => {
            Print.toConsole(data);
        });

        Print.toConsole(message);
        return true;
    }
}

App.main();
