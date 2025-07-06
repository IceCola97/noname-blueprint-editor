import * as Blockly from 'blockly';
import * as Zh from 'blockly/msg/zh-hans'
import { registerBlocks } from './ui/blocks/noname';

const context = {};

registerBlocks();
Blockly.setLocale(Zh);

context.workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox')
});