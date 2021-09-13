/**
 * @desc 柜台划单列表查询
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = new defs.PageDTO();

export function request(params, body, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/counter/receive/list', params, 'POST'),
    {
      method: 'POST',

      body,
      ...options,
    },
  );
}
