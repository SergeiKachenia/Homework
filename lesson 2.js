//lesson 2
1.
const arr = [1, 2, 3, 5, 1, 6, 2, 5, 6, 7];
const arr1 = Array.from(new Set(arr));
console.log(arr1);

2.
const obj1 = {
    id: 1,
    name: 'userName'
};
const obj2 = {
    id: 1,
    password: 'qwerty'
}
const obj3 = {...obj1,
    ...obj2
}
console.log(obj3)

3.
const add = (x, y) => x + y;

4.
const sleep = ms => {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
sleep(5000).then(() => {
    console.log('Выполнилось через 5 секунд!')
})



//lesson 3