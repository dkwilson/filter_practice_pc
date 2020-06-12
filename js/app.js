//filter buttons

(function(){
    //select all buttons
    const filterBtn = document.querySelectorAll('.filter-btn');

    filterBtn.forEach(btn => {
        btn.addEventListener('click', function(event){
            event.preventDefault();

            const value = event.target.dataset.filter;

            const items = document.querySelectorAll('.store-item');


            items.forEach(item => {
                if( value === 'all'){
                    item.style.display = "block";
                } else {
                    if(item.classList.contains(value)){
                        item.style.display = "block";
                    }else {
                        item.style.display = 'none';
                    }
                }
            })
        })
    })    

})();

//search input
(function(){

})();