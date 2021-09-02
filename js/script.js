window.addEventListener('DOMContentLoaded', () => {   //constuction for correct loaded page
    const tabs = document.querySelectorAll('.tabheader__item'),   //tab
          tabsContent = document.querySelectorAll('.tabcontent'), //content tab
          tabParent = document.querySelector('.tabheader__items'); //block of tabs

    function hideTabContent() {                            //function for hide tab (hide from display and off active mode)
        tabsContent.forEach(item => {
            item.style.display = 'none';
         });

         tabsContent.forEach(item => {
            item.classList.remove('tabheader__item_active');
         });
     }
     
     function showTabContent(i) {                           //function for show the [i] tabContent and on actiive mode
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
     }

hideTabContent();
showTabContent(1);


});

