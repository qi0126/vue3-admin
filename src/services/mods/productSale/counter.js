/**
 * @desc 柜位下拉接口
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 搜索 */
  search;
}

export const init = new defs.FrontResponse();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/proSale/counter', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
