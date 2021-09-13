/**
 * @desc 删除配置
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** id */
  id;
}

export const init = false;

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/saleMappingRelation/delete', params, 'POST'),
    {
      method: 'POST',

      ...options,
    },
  );
}
