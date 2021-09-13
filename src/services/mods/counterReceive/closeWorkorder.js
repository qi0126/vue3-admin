/**
 * @desc 柜台关单
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** TheRepairOrder行标识 */
  lineUnique;
}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/counter/receive/close', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}
