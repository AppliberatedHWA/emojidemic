namespace Emojidemic {

    export class UnicodeItem {
        private static _killCount: number = 0;

        private element: HTMLElement;
        private readonly parentElement: Element;

        public constructor(emoji: string, parentElement: Element) {
            this.element = document.createElement("span");
            // this.element.innerText = (String as any).fromCodePoint(codePoint);
            this.element.innerText = emoji;

            // this.element.dataset.codePoint = codePoint.toString(16);

            const left: number = Utils.getRandomIntInclusive(parentElement.clientWidth - 32);
            this.element.style.left = `${left}px`;
            const top: number = Utils.getRandomIntInclusive(parentElement.clientHeight - 32);
            this.element.style.top = `${top}px`;
            /* console.log(parentElement.clientHeight + " " + this.element.style.top); */

            this.element.addEventListener("click", this.handleClick);

            this.parentElement = parentElement;
        }

        public add(): void {
            this.parentElement.appendChild(this.element);
        }

        public static get killCount(): number {
            return UnicodeItem._killCount;
        }

        private handleClick(event: MouseEvent) {
            this.parentElement.removeChild(event.target as Element);
            UnicodeItem._killCount++;
        }
    }
}
