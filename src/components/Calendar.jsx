import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export default function Calendar({ selectedDate, onSelectDate }) {

    return (
        <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={onSelectDate}
            // 3. Removemos a customização complexa de 'classNames'

            // As props de funcionalidade continuam as mesmas
            disabled={{ before: new Date() }}
            fromMonth={new Date()}
            weekStartsOn={0} // 0 para Domingo
        />
    );
}