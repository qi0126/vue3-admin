/**
 * @desc 修改配置
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = false;

export function request(params, body, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/saleMappingRelation/update', params, 'POST'),
    {
      method: 'POST',

      body,
      ...options,
    },
  );
}
