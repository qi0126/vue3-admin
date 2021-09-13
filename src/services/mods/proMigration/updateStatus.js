/**
 * @desc 根据id修改状态
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** id */
  id;
  /** 迁移状态(不传值默认为:暂不迁移)  1:待迁移,2:已迁移, 3:暂不迁移 */
  status;
}

export const init = new defs.FrontResponse();

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/proMigra/updateStatus', params, 'POST'),
    {
      method: 'POST',

      ...options,
    },
  );
}
