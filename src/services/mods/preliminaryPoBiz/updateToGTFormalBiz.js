/**
 * @desc 保存并生成正式订单(柜台)
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = undefined;

export function request(params, body, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/preliminary/pobiz/updateToGTFormalBiz', params, 'POST'),
    {
      method: 'POST',

      body,
      ...options,
    },
  );
}
