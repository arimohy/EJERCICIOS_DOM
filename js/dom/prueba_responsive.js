const d=document;

export default function responsiveTester(form){
    const $form =d.getElementById(form);
    let tester;

    d.addEventListener("submit",e=>{
        if(e.target===$form){
            e.preventDefault();//anula e proceso por defauñ

            //abrir ventana
            tester=window.open($form.direction.value,
                "tester",
                `innerWidth=${$form.ancho.value},innerHeight=${$form.alto.value}`
                );
        }
    });
    d.addEventListener("click",e=>{
        if(e.target===$form.cerrar){
            tester.close();
        }
    })
}