/**
 * @desc 新增标签
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 标签名 */
  label;
  /** 产品id */
  proId;
}

export const init = false;

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/ordrePro/addLabel', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
