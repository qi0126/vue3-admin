/**
 * @desc 上传文件,只限于zip rar文件,其他类型的文件无法上传 限制大小为200Mb以下
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** uploadType */
  uploadType;
}

export const init = new defs.FrontResponse();

export function request(params, form, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/common/uploadFile', params, 'POST'), {
    method: 'POST',
    body: form,

    ...options,
  });
}
