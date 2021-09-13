/**
     * @desc 柜台单管理列表查询
柜台单管理默认只查询当前登录用户所管柜台下的柜台单
     */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = new defs.PageDTO();

export function request(params, body, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/pobiz/queryGTManagePoList', params, 'POST'),
    {
      method: 'POST',

      body,
      ...options,
    },
  );
}
