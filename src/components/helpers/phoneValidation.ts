const validatePhone = (phone:string) => {
    if (phone === '') {
        return false;
    }
    return true;
}

export default validatePhone;