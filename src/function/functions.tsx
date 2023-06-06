export function convertDate(variable: string): any {

    const MESES = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    
    const arr = variable.split(' ');

    const fechaArr = arr[0];

    const arrDate = fechaArr.split('-');
    
    const año = arrDate[0];
    const mes = parseInt(arrDate[1].split('')[0] == '0' ? arrDate[1].split('')[1] : arrDate[1].split('').join(''));
    const dia = arrDate[2].split('')[0] == '0' ? arrDate[2].split('')[1] : arrDate[2];


    const fechaHora = arr[1];

    return {
        fecha: `${dia} de ${MESES[mes]}, ${año} `,
        hora: fechaHora
    };
}

export function convertPopultation(variable: number): string {
    const parseNumber = String(variable);
    const arrNumber = parseNumber.split('').reverse();

    const centenar = arrNumber.slice(0,3).join('');
    const millar = arrNumber.slice(3,6).join('');
    const millon = arrNumber.slice(6,9).join('')

    return `${millon} ${millar} ${centenar}`

}