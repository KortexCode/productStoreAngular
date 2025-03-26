export class DateHour {
    static fecha() {

        let fecha = new Date();

        const dia = fecha.getDate();
        const mes = fecha.getMonth() + 1;
        const anio = fecha.getFullYear();

        let valorFecha = `${dia}/${mes}/${anio}`;
        return valorFecha;
    }

    static calcularEdad() {

        let date1 = new Date();

        let currentYear = date1.getFullYear();
        let currentMonth = date1.getMonth() + 1;
        let currentDay = date1.getDate();

        let FinalMonth;
        let FinalDay ;

        if (currentMonth < 10) {
            FinalMonth = "0" + currentMonth;
        } else {
            FinalMonth = currentMonth;
        }

        if (currentDay < 10) {
            FinalDay = "0" + currentDay;
        } else {
            FinalDay = currentDay;
        }

        const TodayDate = `${currentYear - 18}-${FinalMonth}-${FinalDay}`;
        return  TodayDate;

    }

    static horaInicio(){
        const horaActual = new Date();
        let hora = horaActual.getHours();
        let minutos = horaActual.getMinutes();
        let segundos = horaActual.getSeconds();

        let horaInicio = `${hora}:${minutos}:${segundos}`;
        return  horaInicio;

    }

    static fechaOrdenBarra(){
        const fecha = new Date();
        var dia = fecha.getDate();
        var mes = fecha.getMonth()+1;
        console.log(mes)
        var anio = fecha.getFullYear();

        let calculo =  `${anio}-${mes}-${dia}`;
        return calculo;
    }

    static fechaSuperiorDia(){
        const hoy = new Date();

        // Ajustamos manualmente la fecha en formato YYYY-MM-DD
        const year = hoy.getFullYear();
        const month = (hoy.getMonth() + 1).toString().padStart(2, '0'); // Mes en formato 2 dígitos
        const day = hoy.getDate().toString().padStart(2, '0'); // Día en formato 2 dígitos

        let valor = `${year}-${month}-${day}`;
        return valor
      }

}
