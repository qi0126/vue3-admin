/**
 * @desc 获取料组数据
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** id */
  id;
}

export const init = new defs.FrontResponse();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/materialGroup/get', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
