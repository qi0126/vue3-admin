/**
 * @desc 销售交期差异列表
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = new defs.PageDTO();

export function request(params, body, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/variant/getXsList', params, 'POST'), {
    method: 'POST',

    body,
    ...options,
  });
}
