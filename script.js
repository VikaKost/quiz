const data = {
    counterFormat: 'Поехали, вопрос %current из %total',
    questions: [
      {
        'q': 'Откуда вы?',
        'options':['Минск', 'Минская обл', 'Брест и обл', 'Витебск и обл' , 'Гомель и обл' , 'Гродно и обл' , 'Могилев и обл'],
      },
      {
        'q': 'Как у вас с работой?',
        'options': [
          'Официально работаю',
          'Работаю неофициально',
          'Не работаю/в декрете/пенсионер/студент'
        ],

      },
      {
        'q': 'Сколько денег хотите?',
        'options': [
          'до 2 000 рублей',
          'от 2 000 до 10 000 рублей',
          'больше 10 000 рублей'
        ],
      },
      {
        'q': 'Есть ли просрочки по кредитам?',
        'options': [
          'Да, сейчас есть',
          'Были, погасил',
          'Просрочек нет'
        ],
      }
    ]
};


let numOfQuest = 1;
let prev = '';
let current = '';
let result = [];

$(document).on('click', '.prev-slide', function(){
    result.pop();
    $(`#${current}`).hide();
    $(`#${prev}`).show();

    numOfQuest--;
    current = prev;
    prev = `q-${numOfQuest - 1}`;
});

$(document).on('click','.q-item', function(){
    result.push(`${$(this).text()}`);
    numOfQuest++;
    prev = current;
    current =  `q-${numOfQuest}`

    $(`#${prev}`).hide();
    $(`#${current}`).show();  
});

$(document).on('click','#get-card', function(){
   alert(result); 
});


$(document).on('submit','#q-form', function(e){
    e.preventDefault();
    result.push(`${$('#name').val()}`);
    result.push(`${$('#phone-type').text()}`);
    result.push(`${$('#phone').val()}`);
    numOfQuest++;
    prev = current;
    current =  `q-${numOfQuest}`
    $(`#${prev}`).hide();

    $(`#${current}`).show();

    $(`.wrapper`).addClass('fin')
    
});

$(document).on('click','#start', function(){
    $('#start-block').hide();
    displaybox()
});        


function displaybox(){ 
    for(let i = 0; i < 4; i++){
        current = `q-${i + 1}`
        $('.wrapper').append(`<div class="content q-content" id=${current}>
                            <span class="q-num">Поехали, вопрос ${i + 1} из 6</span>
                            <h4 class="q-title">${data.questions[i].q}</h4>
                            <div class="q-items"></div>
                            <span class="prev-slide"><img src="img/arrow-red.svg">Назад</span>
                        </div>`
                         );
        $.each(data.questions[i].options, function(i, item) {
             $(`#${current} .q-items`).append($(`<span class="q-item" data-value="${item}">` + item + '</span>'));
        })
        if(i === 0){
            $('.content').addClass('first')
         }
        else{
            $(`#${current}`).hide()
        }
    } 
    current = `q-${numOfQuest}`
}


