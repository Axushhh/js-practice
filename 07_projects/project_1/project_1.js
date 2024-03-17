const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
        // this code is done by if 
        // console.log(e);
        // console.log(e.target);
        // if(e.target.id === 'grey'){
        //     body.style.backgroundColor =  e.target.id;
        // }
        // if(e.target.id === 'white'){
        //     body.style.backgroundColor =  e.target.id;
        // }
        // if(e.target.id === 'blue'){
        //     body.style.backgroundColor =  e.target.id;
        // }
        // if(e.target.id === 'yellow'){
        //     body.style.backgroundColor =  e.target.id;
        // }

        // this code is done by switch case
        const color = e.target.id;
        switch(color){
            case 'grey':
                body.style.backgroundColor = 'grey';
                break;
            
            case 'white':
                body.style.backgroundColor = 'white';
                break;
            
            case 'blue':
                body.style.backgroundColor = "blue";
                break;
            
            case 'yellow':
                body.style.backgroundColor = 'yellow';
                break;

            case 'purple':
                body.style.backgroundColor = 'purple';
                break;

            case 'neon':
                body.style.backgroundColor = 'RGB(34 255 13)';
                break;

                default:
                    body.style.backgroundColor = 'white'
            }
            
    })
})