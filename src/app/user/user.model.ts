import { Deserializable } from "../shared/models/deserializable.model";

export class User  implements Deserializable {
    deserialize(input: any): this {
        Object.assign(this, input);
        //this.car = new Car().deserialize(input.car);
        return this;
    }

    id: number;

    firstName: string;
    lastName: string;
    email: string;
    constructor() {
    }
}
