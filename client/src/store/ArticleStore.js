import {makeAutoObservable} from "mobx";

export default class ArticleStore {
    constructor() {
        this._types = []
        this._articles = []
        this._selectedType = {}
        this._selectedArticle = {}
        makeAutoObservable(this)
    }
    setTypes(types) {
        this._types = types
    }
    setArticle(articles) {
        this._articles = articles
    }



    setSelectedType(type){
        this._selectedType = type
    }

    setSelectedArticle(article){
        this._selectedArticle = article
    }


    get types() {
        return this._types
    }

    get selectedType() {
        return this._selectedType
    }

    get articles(){
        return this._articles
    }


}
