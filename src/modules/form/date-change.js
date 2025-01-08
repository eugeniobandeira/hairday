import { schedulesDay } from "../schedules/page-load";

const selectedDate = document.getElementById('date');

selectedDate.onchange = () => schedulesDay();