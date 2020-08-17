import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const command = 'open-in-new-window.open';

	let commandHandler = vscode.commands.registerCommand(command, (uri: vscode.Uri) => {
		vscode.window.showInformationMessage(`Opening ${uri.path} in new window!`);
		vscode.commands.executeCommand('vscode.openFolder', uri, true);
	});

	context.subscriptions.push(commandHandler);
}

export function deactivate() { }
