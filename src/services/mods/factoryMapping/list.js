/**
 * @desc 列表
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = [];

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/factory_mapping/list', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}
