/**
 * @desc 更新产品(第三阶段)
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = new defs.FrontResponse();

export function request(params, body, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/pro/updateProSale', params, 'POST'), {
    method: 'POST',

    body,
    ...options,
  });
}
