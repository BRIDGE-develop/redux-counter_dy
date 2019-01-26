export default function getRandomColor() {
    const colors = [
        '#495057',
        '#f03e3e',
        '#d6336c',
        '#ae3ec9',
        '#7048e8'
    ];

    const random = Math.floor(Math.random() * 5);

    return colors[random];
}