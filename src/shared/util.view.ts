export class UtilView {
    static formatDate(dateString) {
        if (!dateString) return '';
        const options = { year: 'numeric' as const, month: '2-digit' as const, day: '2-digit' as const, hour: '2-digit' as const, minute: '2-digit' as const };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', options).replace(',', '');
    }

}
