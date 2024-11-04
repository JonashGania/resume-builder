import {parse, format, isValid} from 'date-fns'
import html2pdf from 'html2pdf.js'
import { FormData } from '../interface/types';

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
     
export const handleDownloadPDF = (resumeRef: React.RefObject<HTMLDivElement>, formData: FormData) => {
    const element = resumeRef.current;
    const options = {
        margin: 0,
        filename: `${formData.personalInfo.lastName ? formData.personalInfo.lastName : "my"}_resume.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'A4', orientation: 'portrait'},
    };
    html2pdf().set(options).from(element).save();
}