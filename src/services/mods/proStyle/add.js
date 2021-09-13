/**
 * @desc 新增
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 代号 */
  code;
  /** 图片 */
  img;
  /** 关键字 */
  keyword;
  /** number */
  number;
  /** 序号 */
  numner;
  /** 品类code */
  oneCode;
  /** 品类名称 */
  oneName;
  /** 制造供应code */
  processCode;
  /** 制造工艺名称 */
  processName;
  /** 状态: 1:启用 2:禁用 */
  status;
  /** 款式描述 , */
  styleName;
}

export const init = new defs.FrontResponse();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/proStyle/add', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
