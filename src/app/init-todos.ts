export class Init{
	load()
	{
		if(localStorage.getItem('todos') == null || localStorage.getItem('todos') == undefined)
		{
			console.log('No Todo\'s Found ..Creating some for you ');
			let todos = [{task:'Task 1 to be Done',done:false},
			{task:'Task 2 to be Done',done:false},
			{task:'Task 3 to be Done',done:false}];
			localStorage.setItem('todos',JSON.stringify(todos)); 
		}
		else
		{
			console.log('Found Todo\'s...!');
		}
	}
}