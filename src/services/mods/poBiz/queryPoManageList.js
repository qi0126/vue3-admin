/**
     * @desc 订单管理列表查询
查询当前公司所有的正式订单
     */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = new defs.PageDTO();

export function request(params, body, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/pobiz/queryPoManageList', params, 'POST'),
    {
      method: 'POST',

      body,
      ...options,
    },
  );
}
