/**
 * @desc 查询Code列表信息
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** code: 品类:ONE_CODE 制造工艺:MANUFACTURE_CRAFT */
  code;
  /** 搜索框 */
  search;
}

export const init = new defs.FrontResponse();

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/proStyle/selectCode', params, 'POST'),
    {
      method: 'POST',

      ...options,
    },
  );
}
