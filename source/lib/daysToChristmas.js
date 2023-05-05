exports.daysToChristmas = () =>{
    const today = new Date();
    const christmasDate = new Date(today.getFullYear(), 12, 24);

    if(today.getMonth() === 11 && today.getDate() > 25) 
        christmasDate.setFullYear(today.getFullYear() + 1)

    const timeDifference = Math.abs(christmasDate.getTime() - today.getTime());
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return `${days} days left until Christmas`;
}
