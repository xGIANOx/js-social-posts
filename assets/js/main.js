const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    },
    {
        "id": 6,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "",
        "author": {
            "name": "Enrico Gian",
            "image": ""
        },
        "likes": 777,
        "created": "2023-03-24"
    }
];


const container_element = document.querySelector('.posts-list')

posts.forEach((post, i) => {

    const this_post = posts[i]
    const date = new Date(this_post.created);
    const formatted_date = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    const profile_image = this_post.author.image ? this_post.author.image : 'https://via.placeholder.com/300x300?text=' + this_post.author.name.split(' ').map(n => n[0]).join('');
    const post_markup = `
    <div class="post">
     <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${profile_image}" alt="">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${this_post.author.name}</div>
                <div class="post-meta__time">${formatted_date}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${this_post.content}</div>
    <div class="post__image">
        <img src="${this_post.media}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" data-postid="${this_post.id}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-1" class="js-likes-counter">${this_post.likes}</b> persone
            </div>
        </div> 
    </div>            
</div>`
container_element.insertAdjacentHTML('beforeend', post_markup)

})

const like_btn_el = document.querySelectorAll('.like-button');

like_btn_el.forEach(button => {
  button.addEventListener('click', function() {
    console.log('cliccato');
    button.classList.toggle('liked');
    
    const likes_counter_el = button.closest('.js-likes').querySelector('.js-likes-counter');

    if (button.classList.contains('liked')) {
      likes_counter_el.innerHTML = parseInt(likes_counter_el.innerHTML) + 1;
    } else {
      likes_counter_el.innerHTML = parseInt(likes_counter_el.innerHTML) - 1;

    }
    
  });
});

