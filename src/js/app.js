import read from './reader';
import json from './parser';

export default class GameSavingLoader {
    static load() {
        async () => {
            const data = await read();
            const value = await json(data);
            return value;
        }
    }
}