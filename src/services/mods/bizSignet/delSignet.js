/**
 * @desc 删除字印, 可用于删除当前公司的任何字印
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** signetId */
  signetId;
  /** id */
  '字印ID';
}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/bizSignet/delete', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
