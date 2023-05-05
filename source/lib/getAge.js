exports.getAge = (birthDay) => {
    const today = new Date();
    
    birthDay = new Date(Date.parse(birthDay))
    
    if(birthDay == "Invalid Date") throw new Error('Invalid Date') 

    const age = today.getFullYear() - birthDay.getFullYear();
    const month = today.getMonth() - birthDay.getMonth();
    const day = today.getDate() - birthDay.getDate();

    if (month < 0 || (month === 0 && day < 0)) return age - 1;
        
    return age;
}
