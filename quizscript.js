const quizDB=[
{
	question: "Q1:Who is the Father of our Nation?",
		a: "mahatma gandhi",
		b: "RabindraNath Tagore",
		c: "Jawar Lal Nehru",
		d: "Bhagat Singh",
		ans:"opt1"
},
{
	question: "Q2:Who was the first President of India? ",
		a: "mahatma gandhi",
		b: "RabindraNath Tagore",
		c: "Jawar Lal Nehru",
		d: "Rajendra Prasad",
		ans:"opt4"
},
{
	question: "Q3:Who is known as Father of Indian Constitution?",
		a: "mahatma gandhi",
		b: "RabindraNath Tagore",
		c:  "Dr Bhim Rao Ambedkar",
		d: "Bhagat Singh",
		ans:"opt3"
},
{
	question: "Q4:Which is the most sensitive organ in our body?",
		a: "internalorgan",
		b: "RabindraNath Tagore",
		c: "Jawar Lal Nehru",
		d: "Bhagat Singh",
		ans:"opt1"
},
{
	question: "Q5:Who is the Father of our Nation?",
		a: "mahatma gandhi",
		b: "RabindraNath Tagore",
		c: "Jawar Lal Nehru",
		d: "Bhagat Singh",
		ans:"opt1"
},
{
	question: "Q6:Who was the first Prime Minister of India? ",
		a: "mahatma gandhi",
		b: "RabindraNath Tagore",
		c: "Jawar Lal Nehru",
		d: "Bhagat Singh",
		ans:"opt3"
},
{
	question: "Q7:Who invented Computer?",
		a: "mahatma gandhi",
		b: "RabindraNath Tagore",
		c: "Jawar Lal Nehru",
		d: "Chales Babbage",
		ans:"opt4"
}];  
 const question=document.querySelector('.question'); 
const option1=document.querySelector('#opt1');
const option2=document.querySelector('#opt2');
const option3=document.querySelector('#opt3');
const option4=document.querySelector('#opt4');
const submit=document.querySelector('#submit');
const showScores=document.querySelector('#showScore');
let questionCount=0;
let score=0;
const loadQuestion=()=> {
	const questionList=quizDB[questionCount];
	question.innerText=questionList.question ;
	
	console.log(questionList.a);
	console.log(opt1.innerHTML);
	
	label1.innerHTML=questionList.a;
	label2.innerText=questionList.b;
	label3.innerText=questionList.c;
	label4.innerText=questionList.d;

} 
loadQuestion();
const options=document.querySelectorAll('.answer');
const getCheckAnswer = () =>
{
	let answer;
	options.forEach((e)=>{
		if(e.checked)
		{
			answer=e.id;
		}
	})
	return answer;
	
}

const deselectAll = () =>{
options.forEach((e)=>{
	e.checked=false;
	 
})
}

submit.addEventListener('click',()=>
{
	const checkedAnswer=getCheckAnswer();
	if(checkedAnswer==quizDB[questionCount].ans)
	{
		score++;
	}
	questionCount++;
	deselectAll(); 
	if(questionCount<quizDB.length)
	{
		loadQuestion();
	}
	else
	{ 

		div = document.createElement( 'div' );
		div.textContent = ' percent you have scored.    ';
		showScores.innerHTML= (score*100)/quizDB.length;
		showScores.appendChild( div );
		button=document.createElement('button');
		button.setAttribute("onclick", "location.reload()");
		button.textContent="play again";
		showScore.appendChild(button);
		showScore.classList.remove('scoreArea');
	}
		
});