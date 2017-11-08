/// <reference path="Utils.ts" />
/// <reference path="EmojiList.ts" />
/// <reference path="UnicodeItem.ts" />

namespace Emojidemic {

    export class App {

        private static readonly MAX_CODE_POINT: number = 0x10FFFF;

        private areaElement: HTMLElement;
        private infectedCounter: HTMLElement;
        private killCounter: HTMLElement;
        private killSpeedEl: HTMLElement;
        private lastKillCount: number;

        public constructor() {
            /* tslint:disable:no-non-null-assertion */
            this.areaElement = document.getElementById("area")!;
            this.infectedCounter = document.getElementById("infected-counter")!;
            this.killCounter = document.getElementById("kill-counter")!;
            this.killSpeedEl = document.getElementById("kill-speed")!;
            /* tslint:enable:no-non-null-assertion */

            setInterval(() => this.addNewUnicode(), 500);
            setInterval(() => this.update(), 1000);
        }

        private update() {
            this.infectedCounter.innerText = this.areaElement.childElementCount.toString();
            this.killCounter.innerText = UnicodeItem.killCount.toString();

            const killsPerSecond: number = UnicodeItem.killCount - this.lastKillCount;
            this.killSpeedEl.innerText = killsPerSecond.toString();
            this.lastKillCount = UnicodeItem.killCount;
        }

        private addNewUnicode(): void {
            // const codePoint: number = Utils.getRandomIntInclusive(App.MAX_CODE_POINT);

            const emoji: string = Emojidemic.EMOJI_LIST[Utils.getRandomIntInclusive(Emojidemic.EMOJI_LIST.length - 1)];

            // const unicodeItem: UnicodeItem = new UnicodeItem(codePoint, this.areaElement);
            const unicodeItem: UnicodeItem = new UnicodeItem(emoji, this.areaElement);
            unicodeItem.add();
        }

    }

}

window.addEventListener("load", () => new Emojidemic.App());
