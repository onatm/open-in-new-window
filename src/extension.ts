import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const openCommand = 'open-in-new-window.open';

	let openCommandHandler = vscode.commands.registerCommand(openCommand, (uri?: vscode.Uri) => {
		if (!uri) {
			vscode.window.showWarningMessage('The intended usage is from the explorer context menu.');
			return;
		}
		vscode.window.showInformationMessage(`Opening ${uri.path} in new window!`);
		vscode.commands.executeCommand('vscode.openFolder', uri, true);
	});

	context.subscriptions.push(openCommandHandler);
}

export function deactivate() { }
