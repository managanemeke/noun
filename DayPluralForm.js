import {Form} from "./Form.js";

export class DayPluralForm extends Form {
    /**
     * @inheritDoc
     */
    nominative() { return 'дни' }

    /**
     * @inheritDoc
     */
    genitive() { return 'дней' }

    /**
     * @inheritDoc
     */
    dative() { return 'дням' }

    /**
     * @inheritDoc
     */
    accusative() { return 'дни' }

    /**
     * @inheritDoc
     */
    ablative() { return 'днями' }

    /**
     * @inheritDoc
     */
    prepositional() { return 'днях' }
}
