const HarmonyTemplate = require('./harmony1');

const {sleep, writeFileJSON} = require('../../lib/common');
const moment = require('moment-timezone');

class Harmony4 extends HarmonyTemplate {
  static scriptNameDesc = '好礼来敲门';
  static shareCodeTaskList = [];
  static commonParamFn = () => ({appId: '1EFRUxg'});
}

module.exports = Harmony4;
