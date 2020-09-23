function fun(n) {
    if (n > 200) {
        return 'Liczba nie znajduje się w przedziale';
    } else if (n < 100) {
        return 'Liczba nie znajduje się w przedziale';
    } else {
        return 'Liczba znajduje się w przedziale';
    }

}
console.log(fun(130));