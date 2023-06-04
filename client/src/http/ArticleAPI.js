import {$authHost, $host} from "./index";

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createArticle = async (article) => {
    const {data} = await $authHost.post('api/article/create', article)
    return data
}

export const fetchArticle = async () => {
    const {data} = await $host.get('api/article/get')
    return data
}

export const fetchOneArticle = async (id) => {
    const {data} = await $host.get('api/article/' + id)
    return data
}
