


 const logo = document.getElementById('logo');
 logo.addEventListener('click',()=>{
   location.reload(true);
   window.scrollTo(0, 0);
 })
const page = document.getElementById('bat-img');
page.addEventListener('click',()=>{
 window.location = 'page2.html'
})
const page2 = document.getElementById('bat-img2');
page2.addEventListener('click',()=>{
 window.location = 'page3.html'
})
const page3 = document.getElementById('bat-img3');
page3.addEventListener('click',()=>{
 window.location = 'page4.html'
})
const page4 = document.getElementById('bat-img4');
page4.addEventListener('click',()=>{
 window.location = 'page5.html'
})
const page5 = document.getElementById('bat-img5');
page5.addEventListener('click',()=>{
 window.location = 'page6.html'
})
 const allProducts = document.getElementById('products');
  allProducts.addEventListener('click',()=>{
   window.location = 'produts.html'
  })
  const grade1Bats = document.getElementById('Grade');
  grade1Bats .addEventListener('click',()=>{
   window.location = 'grade.html'
  })
  const grade2Bats = document.getElementById('grade2');
  grade2Bats .addEventListener('click',()=>{
   window.location = 'grade2.html'
  })
  const bats = document.getElementById('mb-malik');
 bats .addEventListener('click',()=>{
   window.location = 'mb-malik.html'
  })
  
  const Willowbats = document.getElementById('Willow-bats');
  Willowbats .addEventListener('click',()=>{
   window.location = 'willow.html'
  })
  const kashmirbats = document.getElementById('kashmir');
  kashmirbats .addEventListener('click',()=>{
   window.location = 'willow.html'
  })

  const kits = document.getElementById('kits');
  kits .addEventListener('click',()=>{
   window.location = 'produts.html'
  })
  const sign = document.getElementById('sign-up');
  sign .addEventListener('click',()=>{
    window.location = 'signup.html'
   })
   document.addEventListener("DOMContentLoaded", function () {
    // Check if user is signed in (You can define your own logic here)
    let isSignedIn = localStorage.getItem('username') !== null;

    // Get the image element
    var profileImage = document.getElementById('sign-up');

    if (isSignedIn) {
        // If user is signed in, change the image source to the user photo
        profileImage.src = "all products images/IMG-20240312-WA0072.jpg";
        profileImage.style.height="10%";
        profileImage.style.width="8%";
        profileImage.style.borderRadius="26%";

    } else {
        // If user is not signed in, keep the default image or change it to a sign-in image
        profileImage.src = 'sign-up-icon-signup-square-box-on-transparent-background-free-png.webp'
    }
});
