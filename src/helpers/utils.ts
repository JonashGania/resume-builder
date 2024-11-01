import {parse, format, isValid} from 'date-fns'

export const formattedDate = (date: string) => {
    if (date) {
        const parsedDate = parse(date, 'MM/dd/yyyy', new Date());
        if(isValid(parsedDate)) {
            return format(parsedDate, 'MMMM yyyy');
        }
    }
    return ''
}