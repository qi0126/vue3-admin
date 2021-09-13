/**
 * @desc 新增标签
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 标签名称 */
  name;
}

export const init = new defs.FrontResponse();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/pro/addLabel', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
