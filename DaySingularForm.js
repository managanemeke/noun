import {Form} from "./Form.js";

export class DaySingularForm extends Form {
    /**
     * @inheritDoc
     */
    nominative() { return 'день' }

    /**
     * @inheritDoc
     */
    genitive() { return 'дня' }

    /**
     * @inheritDoc
     */
    dative() { return 'дню' }

    /**
     * @inheritDoc
     */
    accusative() { return 'день' }

    /**
     * @inheritDoc
     */
    ablative() { return 'днём' }

    /**
     * @inheritDoc
     */
    prepositional() { return 'дне' }
}
