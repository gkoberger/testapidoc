/**
*@api{get}/user Request User Information
*@apiName Getuser
*@apiGroup User
*@apiVersion 0.2.0
*
*@apiSuccess{String} name The users name.
*@apiSuccess{Number} Age Calculated age from Birthday
*
*@apiSuccessExample Example data on success: 
*{
*  name: 'Zach',
   age: 28
*}
*/

var currentUser = {
	name: 'Xandor'	
};

function getUser() {
  return {code:200, data: currentUser};	
}


/**
*@api{put}/user Change User 
*@apiName Putuser
*@apiGroup User
*@apiVersion 0.1.0
*
*@apiParam{String} name New name of the user.
*
*@apiError NameEmptyError The name was empty. Minimum of <code>1</code> character is required. 
*/

function setName(name) {
	if (name.length === 0) {
		return	{code: 404, message: 'NameEmptyError'};
	}

	currentUser.name = name;
	return {code: 204}
}
