/**
 * @desc 客单关单
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 客单ID */
  bizId;
}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/agency/receive/close', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}
