/**
     * @desc 正式订单列表查询
查询当前登录者创建的订单
     */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = new defs.PageDTO();

export function request(params, body, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/pobiz/queryFormalPoList', params, 'POST'),
    {
      method: 'POST',

      body,
      ...options,
    },
  );
}
