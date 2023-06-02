import {makeAutoObservable} from "mobx";

export default class ArticleStore {
    constructor() {
        this._types = []
        this._name = []
        this._content = []
        this._selectedType = {}
        makeAutoObservable(this)
    }

    setNames(name) {
        this._name = name
    }
    setContents(content) {
        this._content = content
    }

    setSelectedType(type){
        this._selectedType = type
    }

    get name() {
        return this._name
    }
    get types() {
        return this._types
    }
    get content() {
        return this._content
    }
    get selectedType() {
        return this._selectedType
    }

}
