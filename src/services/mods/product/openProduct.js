/**
 * @desc 批量启用产品
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** id 多个 则用逗号相隔开  132,456,789 */
  id;
}

export const init = new defs.FrontResponse();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/pro/open', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
