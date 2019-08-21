import xml from 'xml-js';
import toolboxStr from 'raw-loader!./visual/toolbox.xml';

let studio = null;


let blocks = require ('./visual/definitions_jerryscript.js');
let code = require ('./visual/code_jerryscript.js');

export function setup (options, imports, register)
{
	studio = imports;

	studio.projects.registerLanguageAddon ('visual', 'rpk', 'rpk', {
		getDefaultRunFileName ()
		{
			return '/main.visual.js';
		},

		/* language specific options */
		sourceLanguage ()
		{
			return 'javascript';
		}
	});


	let toolbox = xml.xml2js (toolboxStr);
	studio.editor_visual.registerBlocksDefinitions ('rpk', blocks, code, toolbox, {type: 'rpk', board: 'rpk'});

	register (null, {});
}