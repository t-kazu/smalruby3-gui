/**
 * Define Ruby with Motion Blocks
 * @param {Blockly} Blockly The ScratchBlocks
 * @return {Blockly} Blockly defined Ruby generator.
 */
export default function (Blockly) {
    Blockly.Ruby.motion_movesteps = function (block) {
        const steps = Blockly.Ruby.valueToCode(block, 'STEPS', Blockly.Ruby.ORDER_NONE) || '0';
        return `move(${steps})\n`;
    };

    Blockly.Ruby.motion_turnright = function (block) {
        const degrees = Blockly.Ruby.valueToCode(block, 'DEGREES', Blockly.Ruby.ORDER_NONE) || '0';
        return `turn_right(${degrees})\n`;
    };

    Blockly.Ruby.motion_turnleft = function (block) {
        const degrees = Blockly.Ruby.valueToCode(block, 'DEGREES', Blockly.Ruby.ORDER_NONE) || null;
        return `turn_left(${degrees})\n`;
    };

    Blockly.Ruby.motion_goto = function (block) {
        const place = Blockly.Ruby.valueToCode(block, 'TO', Blockly.Ruby.ORDER_NONE) || '0';
        return `go("${place}")\n`;
    };

    Blockly.Ruby.motion_goto_menu = function (block) {
        const place = block.getFieldValue('TO') || null;
        return [place, Blockly.Ruby.ORDER_ATOMIC];
    };

    Blockly.Ruby.motion_gotoxy = function (block) {
        const x = Blockly.Ruby.valueToCode(block, 'X', Blockly.Ruby.ORDER_NONE) || '0';
        const y = Blockly.Ruby.valueToCode(block, 'Y', Blockly.Ruby.ORDER_NONE) || '0';
        return `go_to_xy(${x}, ${y})\n`;
    };

    Blockly.Ruby.motion_glideto = function (block) {
        const secs = Blockly.Ruby.valueToCode(block, 'SECS', Blockly.Ruby.ORDER_NONE) || '0';
        const place = Blockly.Ruby.valueToCode(block, 'TO', Blockly.Ruby.ORDER_NONE) || '0';
        return `glide(${secs}, "${place}")\n`;
    };

    Blockly.Ruby.motion_glideto_menu = function (block) {
        const place = block.getFieldValue('TO') || null;
        return [place, Blockly.Ruby.ORDER_ATOMIC];
    };

    Blockly.Ruby.motion_glidesecstoxy = function (block) {
        const secs = Blockly.Ruby.valueToCode(block, 'SECS', Blockly.Ruby.ORDER_NONE) || '0';
        const x = Blockly.Ruby.valueToCode(block, 'X', Blockly.Ruby.ORDER_NONE) || '0';
        const y = Blockly.Ruby.valueToCode(block, 'Y', Blockly.Ruby.ORDER_NONE) || '0';
        return `glidesecs_to_xy(${secs}, ${x}, ${y})\n`;
    };

    Blockly.Ruby.motion_pointindirection = function (block) {
        const direction = Blockly.Ruby.valueToCode(block, 'DIRECTION', Blockly.Ruby.ORDER_NONE) || '0';
        return `point_in_direction(${direction})\n`;
    };

    Blockly.Ruby.motion_pointtowards = function (block) {
        const towards = Blockly.Ruby.valueToCode(block, 'TOWARDS', Blockly.Ruby.ORDER_NONE) || null;
        return `point_towards("${towards}")\n`;
    };

    Blockly.Ruby.motion_pointtowards_menu = function (block) {
        const towards = block.getFieldValue('TOWARDS') || null;
        return [towards, Blockly.Ruby.ORDER_ATOMIC];
    };

    Blockly.Ruby.motion_changexby = function (block) {
        const dx = Blockly.Ruby.valueToCode(block, 'DX', Blockly.Ruby.ORDER_NONE) || '0';
        return `change_x_by(${dx})\n`;
    };

    Blockly.Ruby.motion_setx = function (block) {
        const x = Blockly.Ruby.valueToCode(block, 'X', Blockly.Ruby.ORDER_NONE) || '0';
        return `set_x(${x})\n`;
    };

    Blockly.Ruby.motion_changeyby = function (block) {
        const dy = Blockly.Ruby.valueToCode(block, 'DY', Blockly.Ruby.ORDER_NONE) || '0';
        return `change_y_by(${dy})\n`;
    };

    Blockly.Ruby.motion_sety = function (block) {
        const y = Blockly.Ruby.valueToCode(block, 'Y', Blockly.Ruby.ORDER_NONE) || '0';
        return `set_y(${y})\n`;
    };

    Blockly.Ruby.motion_ifonedgebounce = function () {
        return 'if_on_edge_bounce()\n';
    };

    Blockly.Ruby.motion_setrotationstyle = function (block) {
        const style = block.getFieldValue('STYLE') || null;
        return `set_rotation_style("${style}")\n`;
    };

    Blockly.Ruby.motion_xposition = function () {
        return ['x', Blockly.Ruby.ORDER_ATOMIC];
    };

    Blockly.Ruby.motion_yposition = function () {
        return ['y', Blockly.Ruby.ORDER_ATOMIC];
    };

    Blockly.Ruby.motion_direction = function () {
        return ['direction', Blockly.Ruby.ORDER_ATOMIC];
    };

    return Blockly;
}
