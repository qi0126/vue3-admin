/**
 * @desc 查询
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** id */
  id;
}

export const init = new defs.ProCapacity();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/proCapacity/get', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
