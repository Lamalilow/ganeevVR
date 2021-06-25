let a = 1488;
document.querySelector('#counterButton').addEventListener('click', function (e){

        document.querySelector('.block2').textContent = `${a} +1`
        setTimeout(function (e){
            document.querySelector('.block2').textContent = `${a++}`
        }, 700)
})
