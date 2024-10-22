//Crea un programa que gestione las reservas de un hotel. El
//programa debe permitir agregar reservas, buscar reservas por nombre del
//huésped y calcular el ingreso total del hotel.

interface Reserva {
    nombreHuesped: string;
    numeroHabitacion: number;
    noches: number;
    costoPorNoche: number;
}

let reservasHotel: Reserva[] = [];

function agregarReserva(nombreHuesped: string, numeroHabitacion: number, noches: number, costoPorNoche: number): void {
    let nuevaReserva: Reserva = {
        nombreHuesped,
        numeroHabitacion,
        noches,
        costoPorNoche
    };
    reservasHotel.push(nuevaReserva);
    console.log(`Reserva agregada para ${nombreHuesped} en la habitación ${numeroHabitacion} por ${noches} noches.`);
}

function buscarReserva(nombreHuesped: string): Reserva | undefined {
    const reservaEncontrada = reservasHotel.find(reserva => reserva.nombreHuesped.toLowerCase() === nombreHuesped.toLowerCase());
    if (reservaEncontrada) {
        console.log(`Reserva encontrada para ${reservaEncontrada.nombreHuesped}: habitación ${reservaEncontrada.numeroHabitacion}, ${reservaEncontrada.noches} noches.`);
        return reservaEncontrada;
    } else {
        console.log(`No se encontró ninguna reserva para el huésped "${nombreHuesped}".`);
        return undefined;
    }
}

function calcularIngresoTotal(): number {
    if (reservasHotel.length === 0) {
        console.log("No hay reservas en el hotel.");
        return 0;
    }

    const ingresoTotal = reservasHotel.reduce((total, reserva) => total + (reserva.noches * reserva.costoPorNoche), 0);
    console.log(`El ingreso total del hotel es: ${ingresoTotal}`);
    return ingresoTotal;
}

// Ejemplo de uso
agregarReserva("Juan Pérez", 101, 3, 100);
agregarReserva("Ana García", 102, 2, 150);
agregarReserva("Luis Martínez", 103, 1, 200);

buscarReserva("Ana García");

calcularIngresoTotal();
