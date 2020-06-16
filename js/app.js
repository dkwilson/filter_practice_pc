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
    //target search box
    const search = document.getElementById('search-item');

    search.addEventListener('keyup', () =>{
        let value = search.value.toLowerCase().trim();

        const items = document.querySelectorAll('.store-item');
        
        items.forEach(item => {
            let type = item.dataset.item;

            // //will include more results than intended 
            // if(type.includes(value)){
            //     item.style.display = 'block';
            // } else {
            //     item.style.display = 'none';
            // }

            let length = value.length; 
            
            let match = type.slice(0,length);

            if(value === match) {
                item.style.display = "block"
            } else {
                item.style.display = "none"
            }
        })

    })
})();

//lightbox

(function(){ 
    // all imgaes
    let imageList = [];
    let counter = 0;

    const images = document.querySelectorAll('.store-img');
    const container = document.querySelector('.lightbox-container');
    const item = document.querySelector('.lightbox-item');
    const closeIcon = document.querySelector('.lightbox-close');
    const btnLeft = document.querySelector('.btnLeft');
    const btnRight = document.querySelector('.btnRight');

    //add all images to the array
    images.forEach(img => {
        imageList.push(img.src)
    })

    //open modal
    images.forEach(img => {
        img.addEventListener('click', () => {
            //show modal
            container.classList.add('show');
            //get source
            let src = event.target.src;

            counter = imageList.indexOf(src);
            
            //show modal within image
            item.style.backgroundImage = `url(${src})`;
        });
    });

    //close modal
    closeIcon.addEventListener('click', () => {
        //remove modal
        container.classList.remove('show');
    });

    //pan left
    btnLeft.addEventListener('click', () => {
        counter--;
        if (counter < 0) {
            counter = imageList.length - 1;
            
        }
        item.style.backgroundImage = `url(${imageList[counter]})`;
    })

    //pan right
    btnRight.addEventListener('click', () => {
        counter++
        if (counter > imageList.length -1) {
            counter = 0;
            
        }
        item.style.backgroundImage = `url(${imageList[counter]})`;
    })
})();