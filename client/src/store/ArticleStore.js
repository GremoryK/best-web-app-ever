import {makeAutoObservable} from "mobx";

export default class ArticleStore {
    constructor() {
        this._name = []
        this._content = []
        makeAutoObservable(this)
    }

    setNames(name) {
        this._name = name
    }
    setContents(content) {
        this._content = content
    }

    get name() {
        return this._name
    }
    get content() {
        return this._content
    }

}
