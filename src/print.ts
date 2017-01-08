
export class Print {
    public static toConsole(message: string): boolean {
        /* tslint:disable:no-console */
        console.log(message);
        return true;
    }
}
