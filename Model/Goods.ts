export class Goods {
    id: number;
    name: string;
    type: string;
    price: number;
    quantity: number;
    created: string;
    describe: string

    constructor(id: number,
                name: string,
                type: string,
                price: number,
                quantity: number,
                describe: string) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.price = price;
        this.quantity = quantity;
        this.created = new Date().toString()
        this.describe = describe
    }

    getId(): number {
        return this.id
    }

    setId(id: number): void {
        this.id = id
    }

    getName(): string {
        return this.name
    }

    setName(name: string): void {
        this.name = name
    }

    getType(): string {
        return this.type
    }

    setType(type: string): void {
        this.type = type
    }

    getPrice(): number {
        return this.price
    }

    setPrice(price: number): void {
        this.price = price
    }

    getQuantity(): number {
        return this.quantity
    }

    setQuantity(quantity: number): void {
        this.quantity = quantity
    }

    getCreated(): string {
        return this.created
    }

    setCreated(created: string): void {
        this.created = created
    }

    getDescribe(): string {
        return this.created
    }

    setDescribe(describe: string): void {
        this.describe = describe
    }
}