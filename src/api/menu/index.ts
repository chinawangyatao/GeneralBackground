// @ts-ignore
import {listApi} from '/@/assets/mock/index.js'
import { defaultRequest } from '/@/utils/http'

export function getMenuList() {
    return listApi.data
    // return defaultRequest.request({
    //     url: '/menu/list',
    //     method: 'get'
    // })
}

export function getMenuBtnAuthList(params:any) {
    return defaultRequest.request({
        url: '/menu/btnAuthList',
        method: 'post',
        data: params
    })
}
