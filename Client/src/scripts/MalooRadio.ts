import { customElement } from '@microsoft/fast-element';
import { applyMixins, Radio, StartEnd } from '@microsoft/fast-foundation';
import { RadioTemplate as template} from './MalooRadio.template';
import { RadioStyles as styles } from './MalooRadio.styles';

/** /

@customElement({
    name: 'maloo-radio',
    template,
    styles,
})
export class MalooRadio extends Radio {
}

export interface MalooRadio extends StartEnd {}
applyMixins(MalooRadio, StartEnd);

/**/

@customElement({
    name: 'maloo-radio',
    template,
    styles,
})
export class MalooRadio extends Radio {
    handleStartContentChange() {
        this.startContainer.classList.toggle("start", this.start.assignedNodes().length > 0);
    }

    handleEndContentChange() {
        this.endContainer.classList.toggle("end", this.end.assignedNodes().length > 0);
    }
}

export interface MalooRadio extends StartEnd {}
//applyMixins(MalooRadio, StartEnd);
/**/