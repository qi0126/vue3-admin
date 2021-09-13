/**
 * @desc 查询辅件列表
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 名称 */
  search;
}

export const init = new defs.FrontResponse();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/pro/selectAux', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
