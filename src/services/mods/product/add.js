/**
 * @desc 新增产品(第一阶段)
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 产品类 */
  pro;
}

export const init = new defs.FrontResponse();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/pro/add', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
