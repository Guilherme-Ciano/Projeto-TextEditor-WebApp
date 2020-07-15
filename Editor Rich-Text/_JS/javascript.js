Editor.document.designMode = 'on';
var showingSorceCode = false;
var isInEditMode = true;

var bold = function() {
	Editor.document.execCommand('bold', false, null);
}

function enableEditMode(){
	EditorTextField.document.designMode = 'On';
}

function execCmd (command){
	Editor.document.execCommand(command, false, null);
}

function execCommandWithArg (command, arg){
	Editor.document.execCommand(command, false, arg);
}

function toggleSource(){
	if (showingSorceCode){
		Editor.document.getElementsByTagName('body')[0].innerHTML = Editor.document.getElementsByTagName('body')[0].
		showingSorceCode = false;

	}else{
		Editor.document.getElementsByTagName('body')[0].textContent = Editor.document.getElementsByTagName('body')[0].
			innerHTML;
		showingSorceCode = true;

	}
}
function toggleEdit(){
	if(isInEditMode){
		Editor.document.designMode = 'Off';
		isInEditMode = false;
	}else{
		Editor.document.designMode = 'On';
		isInEditMode = true;
		}
	}

