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

export const capitalizeWords = (text: string) => {
    if(!text) return "";

    const words = text.split(" ");
    const capitalize = words.map((word) => {
        return word ? word[0].toUpperCase() + word.substring(1) : "";
    }).join(" ");
    return capitalize

}
     
