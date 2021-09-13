/**
 * @desc 查看投产单详情
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** TheRepairOrderid */
  id;
}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/launch/get', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
