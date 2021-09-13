/**
 * @desc 根据id查询产品信息
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** id */
  id;
}

export const init = new defs.FrontResponse();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/proMigra/get', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
