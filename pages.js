let detailLink = document.getElementById('text');
detailLink.addEventListener('click', function(){
    window.location = "imgDetail.html"
})
console.log(detailLink);

const Cart = document.getElementById('cart');
Cart.addEventListener('click', function(){
    var cartPara = document.getElementById('cart-para');
    cartPara.style.display = 'block';
    cartPara.style.color = 'green'
    cartPara.style.marginTop = '10px'
    cartPara.style.fontSize = '20px'
    cartPara.textContent = 'Your thing is Add to cart';


    setTimeout(function() {
    cartPara.style.display = 'none';
    },5000)
});
