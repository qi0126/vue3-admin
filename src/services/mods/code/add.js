/**
 * @desc 新增
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 代号 */
  code;
  /** 成色 */
  conditi;
  /** 内容 */
  name;
  /** number */
  number;
  /** 序号 */
  numner;
  /** 图片 */
  pic;
  /** 状态: 1:启用 2:禁用 */
  status;
  /** 如:MANUFACTURE_CRAFT , */
  type;
}

export const init = new defs.FrontResponse();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/code/add', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
