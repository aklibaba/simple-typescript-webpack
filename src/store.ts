/**
 * Created by Aleksander on 2016-12-05.
 */
export default class Store {

    items: string[];

    constructor(items: string[] = ['apples', 'mango', 'strawberry']) {
        this.items = items;
    }

    addItemToStore(item: string) {
        this.items.push(item);
        console.log(`The ${item} has been added to the store`);
    }

    removeItem(item: string) {
        let index = this.items.indexOf(item);
        if (index > -1) this.items.splice(index, 1);
        console.log(`The ${item} has been removed from the store`);
    }

}

