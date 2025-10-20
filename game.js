const albums = [
    {
      name: "Igor",
      cover: "assety/igor.jpg",
    },
    {
        name: "chromokopia",
        cover: "assety/chromokopia.jpg",
    },
    {
        name: "wolf",
        cover: "assety/wolf.jpg",
    },
    {
        name: "blue lips",
        cover: "assety/blue_lips.png",
    },
    {
        name: "business is business",
        cover: "assety/buisness.png",
    },
    {
        name: "donda",
        cover: "assety/donda.jpg",
    },
    {
        name: "good kid maad city",
        cover: "assety/good_kid.jpg",
    },
    {
        name: "hardstone psycho",
        cover: "assety/hardstone.jpg",
    },
    {
        name: "high off life",
        cover: "assety/high_off_life.png",
    },
    {
        name: "jackboys",
        cover: "assety/jackboys.jpg",
    },
    {
        name: "untitled unmastered",
        cover: "assety/untitled.jpg",
    },
    {
        name: "watch the throne",
        cover: "assety/watch_the_throne.jpg",
    },
    {
        name: "ye",
        cover: "assety/ye.jpg",
    },
    {
        name: "yeezus",
        cover: "assety/yeezus.jpg",
    },
    {
        name: "a great chaos",
        cover: "assety/great_chaos.jpg",
    },
    {
        name: "huncho jack, jack huncho",
        cover: "assety/huncho_jack.jpg",
    },
    {
        name: "music",
        cover: "assety/i_am_music.png",
    },
    {
        name: "not all heroes wear capes",
        cover: "assety/not_all_heroes.png",
    },
    {
        name: "savage mode 2",
        cover: "assety/savage_mode_2.png",
    },
    {
        name: "savage mode",
        cover: "assety/savage_mode.png",
    },
    {
        name: "to pimp a butterfly",
        cover: "assety/to_pimp.png",
    },
    {
        name: "vultures 2",
        cover: "assety/vultures_2.png",
    },
    {
        name: "whole letta red",
        cover: "assety/whole_letta.png",
    },
];


function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; 
    }
}


shuffleArray(albums);

let currentQuestion = 0;
let score = 0;
let pocet = albums.length;

function displayQuestion() {
    const question = albums[currentQuestion];
    

    document.getElementById('cover').src = question.cover;
    

    document.getElementById('albumName').value = '';
    
 
    document.getElementById('feedback').textContent = '';

    document.getElementById('pocet').textContent = `${currentQuestion + 1}/${pocet}`;
}

function checkAnswer() {
    const userAnswer = document.getElementById('albumName').value.trim().toLowerCase();
    const correctAnswer = albums[currentQuestion].name.toLowerCase();
    
    if (userAnswer === correctAnswer) {
        score++;
        document.getElementById('feedback').textContent = 'Správně!';
        document.getElementById('feedback').style.color = 'green';
    } else {
        document.getElementById('feedback').textContent = 'Špatně!.....Správná odpověď byla: ' + albums[currentQuestion].name;
        document.getElementById('feedback').style.color = 'red'
    }

    currentQuestion++;
    
    if (currentQuestion < albums.length) {
        setTimeout(displayQuestion, 1000); 
    } else {
        setTimeout(showResults, 1000); 
    }
}

function showResults() {
    localStorage.setItem('quizScore', score);  
    window.location.href = 'results.html';  
}


displayQuestion();
