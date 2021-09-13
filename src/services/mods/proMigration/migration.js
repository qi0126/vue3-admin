/**
 * @desc 迁移数据
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 产品类 */
  pro;
}

export const init = new defs.FrontResponse();

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/proMigra/migration', params, 'POST'),
    {
      method: 'POST',

      ...options,
    },
  );
}
