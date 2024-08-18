import {Noun} from "./Noun.js";
import {DayPluralForm} from "./DayPluralForm.js";
import {DaySingularForm} from "./DaySingularForm.js";

export class DayNoun extends Noun {
    /**
     * @returns {Form}
     */
    plural() { return new DayPluralForm() }

    /**
     * @returns {Form}
     */
    singular() { return new DaySingularForm() }
}
