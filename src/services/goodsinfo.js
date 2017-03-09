import { http } from 'utils'

export default function getGoodsInfoById(goodsId) {
    return http
        .get('goods/view', { goodsId })
        .then(res => res)
}
