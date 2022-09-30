

alert('Bienvenido al simulador de Argentina!!!');
alert('El grupo C está compuesto por Argentina, México, Polonia y Arabia Saudita.')
let salida;
let argentina = 0;
let mexico = 0;
let polonia = 0;
let arabia = 0;
do{
    salida = prompt('Ingrese ESC para salir');
    if (salida != 'ESC'){
        //Fecha 1
    alert('Comienza la fecha 1.');
    for(let i=0; i<1; i++){
    alert('Argentina VS Arabia Saudita');
    let arg1 = parseInt(prompt('Ingrese goles de Argentina'));
    let ara1 =parseInt(prompt('Ingrese goles de Arabia Saudita'));
    if(arg1 > ara1){
        alert('Argentina '+arg1+' VS '+'Arabia Saudita '+ara1);
        argentina = argentina + 3;
    }else if(arg1 == ara1){
        alert('Argentina '+arg1+' VS '+'Arabia Saudita '+ara1);
        argentina = argentina + 1;
        arabia = arabia + 1;
    }else{
        alert('Argentina '+arg1+' VS '+'Arabia Saudita '+ara1);
        arabia = arabia + 3;
    }
    alert('México VS Polonia');
    let mex1 = parseInt(prompt('Ingrese goles de México'));
    let pol1 = parseInt(prompt('Ingrese goles de Polonia'));
    if(mex1 > pol1){
        alert('México '+mex1+' VS '+'Polonia '+pol1);
        mexico = mexico + 3;
    }else if(arg1 == ara1){
        alert('México '+mex1+' VS ' +'Polonia '+pol1);
        mexico = mexico + 1;
        polonia = polonia + 1;
    }else{
        alert('México '+mex1+' VS '+'Polonia '+pol1);
        polonia = polonia + 3;
    }
}

//Fecha 2
alert('Comienza la fecha 2.')
for(let i=0; i<1; i++){
    alert('Argentina VS México');
    let arg2 = parseInt(prompt('Ingrese goles de Argentina'));
    let mex2 = parseInt(prompt('Ingrese goles de México'));
    if(arg2 > mex2){
        alert('Argentina '+arg2+' VS '+'México '+mex2);
        argentina = argentina + 3;
    }else if (arg2 == mex2){
        alert('Argentina '+arg2+' VS '+'México '+mex2);
        argentina = argentina + 1;
        mexico = mexico + 1;
    }else{
        alert('Argentina '+arg2+' VS '+'México '+mex2);
        mexico = mexico + 3;
    }
    alert('Polonia VS Arabia Saudita');
    let pol2 = parseInt(prompt('Ingrese goles de Polonia'));
    let ara2 = parseInt(prompt('Ingrese goles de Arabia Saudita'));
    if(pol2 > ara2){
        alert('Polonia '+pol2+' VS '+'Arabia Saudita '+ara2);
        polonia = polonia + 3;
    }else if(pol2 == ara2){
        alert('Polonia '+pol2+' VS '+'Arabia Saudita '+ara2);
        polonia = polonia + 1;
        arabia = arabia + 1;
    }else{
        alert('Polonia '+pol2+' VS '+'Arabia Saudita '+ara2);
        arabia = arabia + 3;
    }
}

//Fecha 3
alert('Comienza la fecha 3')
    for(let i=0; i<1; i++){
        alert('Polonia VS Argentina');
        let pol3 = parseInt(prompt('Ingrese goles de Polonia'));
        let arg3 = parseInt(prompt('Ingrese goles de Argentina'));
        if(pol3 > arg3){
            alert('Polonia '+pol3+' VS '+'Argentina '+arg3);
            polonia = polonia + 3;
        }else if(pol3 == arg3){
            alert('Polonia '+pol3+' VS '+'Argentina '+arg3);
            polonia = polonia + 1;
            argentina = argentina + 1;
        }else{
            alert('Polonia '+pol3+' VS '+'Argentina '+arg3);
            argentina = argentina + 3;
        }
        alert('Arabia Saudita VS México');
        let ara3 = parseInt(prompt('Ingrese goles de Arabia Saudita'));
        let mex3 = parseInt(prompt('Ingrese goles de México'));
        if(ara3 > mex3){
            alert('Arabia Saudita '+ara3+' VS '+'México '+mex3);
            arabia = arabia + 3;
        }else if(ara3 == mex3){
            alert('Arabia Saudita '+ara3+' VS '+'México '+mex3);
            arabia = arabia + 1;
            mexico = mexico + 1;
        }else{
            alert('Arabia Saudita '+ara3+' VS '+'México '+mex3);
            mexico = mexico + 3;
        }
    }
    }
    alert('Argentina: '+argentina+' puntos.');
    alert('México: '+mexico+' puntos');
    alert('Polonia: '+polonia+' puntos');
    alert('Arabia Saudita: '+arabia+' puntos');
}while(salida != 'ESC')








