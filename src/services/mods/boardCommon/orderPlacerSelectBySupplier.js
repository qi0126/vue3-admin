/**
     * @desc 生产TheRepairOrder看板下单人下拉选
该接口搜索当前工厂的TheRepairOrder中的源单下单人,如果不传任何搜索关键词，则搜索最近下过单的10个姓名
     */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 搜索关键词,对订单的下单人进行模糊搜索 */
  keyword;
}

export const init = [];

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/board/common/orderPlacerSelectBySupplier', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}
