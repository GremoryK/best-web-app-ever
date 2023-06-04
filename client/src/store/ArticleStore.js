import {makeAutoObservable} from "mobx";

export default class ArticleStore {
    constructor() {
        this._types = []
        this._articles = [
            {id: 1, name: "Робототехника", files: "https://www.digital-energy.ru/wp-content/uploads/2021/04/2019-11-14-1200.jpg", content: 'ggggggggggggggggggggg'},
            {id: 2, name: "Нейросети и ИИ"},
            {id: 3, name: "Блокчейн"},
            {id: 4, name: "Большие данные"},
            {id: 5, name: "VR и AR"},
        ]
        this._selectedType = {}
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
