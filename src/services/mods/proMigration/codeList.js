/**
 * @desc 品类列表
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 页码 */
  page;
  /** 行数 */
  rows;
  /** 搜索 */
  search;
  /** 类型   code:BRACELET_TYPE (链扣类型) MANUFACTURE_CRAFT (制造工艺) SURFACE_CRAFT (表面工艺)  PATTERN_TYPE )(花型) CONDITI_TYPE(成色) ONE_CODE(品类)  OPEN_TYPE(开口类型) TAB_CODE(标签) */
  type;
}

export const init = new defs.FrontResponse();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/proMigra/codeList', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
