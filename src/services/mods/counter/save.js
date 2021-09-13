/**
 * @desc 新建或编辑柜台
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 成色（数组）例：['999','9999'] */
  color;
  /** 企业id */
  companyId;
  /** 柜台名称 */
  counterName;
  /** createTime */
  createTime;
  /** 柜台id */
  id;
  /** 柜台领导id */
  leaderId;
  /** 状态，1=启用，2=禁用 */
  lockStatus;
  /** 柜台成员id（数组）例：[1,2,3] */
  memberIds;
  /** 柜台成员个数 */
  memberNum;
  /** 最后修改人 */
  operator;
}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/counter/save', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
