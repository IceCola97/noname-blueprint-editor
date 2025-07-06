<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>无名杀蓝图编辑器 v1</title>
    <style>
        html,
        body {
            height: 100%;
            margin: 0;
        }

        #blocklyDiv {
            height: 480px;
            width: 100%;
        }
    </style>
</head>

<body>
    <div id="app">
        <div id="blocklyDiv"></div>
        <xml id="toolbox" style="display: none">
            <category name="Control">
                <block type="controls_if"></block>
                <block type="controls_repeat"></block>
            </category>
            <category name="Data">
                <block type="logic_compare"></block>
                <block type="math_number"></block>
                <block type="math_arithmetic"></block>
                <block type="text"></block>
                <block type="text_print"></block>
            </category>
            <category name="Noname">
                <block type="trigger_container"></block>
                <block type="trigger_timing_phaseDrawBegin"></block>
                <block type="trigger_timing_phaseJishuBegin"></block>
                <block type="trigger_filter_checkEventPlayer"></block>
                <block type="event_phaseDraw_changeNum"></block>
                <block type="player_draw"></block>
                <block type="selector_player_self"></block>
            </category>
        </xml>

        <button onclick="saveCode()">保存代码</button>
        <button onclick="clearCode()">清除代码</button>
        <button onclick="loadCode(getCode())">加载代码</button>
        <button onclick="runCode(getCode())">运行代码</button>

        <script>
            const workspace = Blockly.inject('blocklyDiv', {
                toolbox: document.getElementById('toolbox'),
            });


            function saveCode() {
                const xml = Blockly.Xml.workspaceToDom(workspace);
                const xmlText = Blockly.Xml.domToText(xml);
                try {
                    console.log(xmlText);
                    localStorage.setItem('blocklyCode', xmlText);
                } catch (e) {
                    alert("保存出错: " + e);
                }
            }

            function clearCode() {
                workspace.clear();
            }

            function getCode() {
                return localStorage.getItem('blocklyCode');
            }

            function loadCode(xmlText) {
                const xml = Blockly.utils.xml.textToDom(xmlText);
                Blockly.Xml.clearWorkspaceAndLoadFromXml(xml, workspace);
            }

            function runCode(xmlText) {
                const tempWorkspace = new Blockly.Workspace();
                const xml = Blockly.utils.xml.textToDom(xmlText);
                Blockly.Xml.domToWorkspace(xml, tempWorkspace);
                const code = Blockly.JavaScript.workspaceToCode(tempWorkspace);
                try {
                    console.log("生成的代码：\n", code);
                    eval(code);
                } catch (e) {
                    alert("执行出错: " + e);
                }
            }
        </script>
    </div>
</body>

</html>