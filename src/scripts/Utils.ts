namespace Emojidemic {
    export class Utils {

        public static getRandomIntInclusive(max: number): number {
            return Math.floor(Math.random() * (max + 1));
        }

    }
}
