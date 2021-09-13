/**
 * @desc 新增/编辑流程
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 单据类型 */
  bizType;
  /** 公司ID */
  companyId;
  /** 创建日期 */
  createTime;
  /** nodeName */
  nodeName;
  /** userId */
  userId;
  /** userName */
  userName;
  /** 最后操作人 */
  operator;
  /** 审批流程 */
  processStep;
  /** 最后更新时间 */
  updateTime;
}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/bizprocess/save', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
