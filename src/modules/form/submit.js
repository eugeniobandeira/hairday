import dayjs from 'dayjs';

const form = document.querySelector('form');
const selectedDate = document.getElementById('date');
const clientName = document.getElementById('client');

const today = dayjs(new Date()).format('YYYY-MM-DD');
selectedDate.value = today;
selectedDate.min = today

form.onsubmit = (event) => {
    event.preventDefault();

    try {
        const name = clientName.value.trim();

        if (!name) {
            Alert('Informe o nome do cliente');
        }

        const hourSelected = document.querySelector('.hour-selected');

        if (!hourSelected) {
            Alert('Selecione uma hora');
        }

        const [hour] = hourSelected.innerText.split(':');

        const when = dayjs(selectedDate.value).add(hour, 'hour');

        const id = Math.floor(Math.random() * 1000);
        
    } catch (error) {
        console.error(error);       
    }
};