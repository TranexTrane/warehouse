var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
    },
  });

  let navigation = document.querySelector(".main-nav");
        let scrollGoal = (window.innerHeight) / 5;
        let dernierScroll = 0;
        window.addEventListener('scroll', function() {
        let alreadyScrolled = window.pageYOffset;
        if(alreadyScrolled > scrollGoal) {
            navigation.classList.add("hide");
        } else {
            navigation.classList.remove("hide");
        }
        // if (alreadyScrolled < dernierScroll) {
        //     navigation.classList.remove("hide");
        // }
        dernierScroll = alreadyScrolled;
        });

        
        let burger = document.querySelector(".burger-menu");
        let nav = document.querySelector(".main-menu");
        let divBurger = document.querySelectorAll(".burger-menu div")

        burger.addEventListener('click', function() {
            for (var e = 0; e < divBurger.length; e++)
            divBurger[e].classList.toggle("active2")
            nav.classList.toggle("active");
});