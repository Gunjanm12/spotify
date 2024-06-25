 let pop_song_left = document.getElementById('pop_song_left');
 let pop_song_right = document.getElementById('pop_song_right');
 let pop_song =document.getElementsByClassName('pop_song')[0];
 const masterPlay = document.getElementById('masterPlay');
 const wave=document.getElementById('wave');

 pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft+= 230;

 })
 pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft-= 230;

 })


 let pop_art_left = document.getElementById('pop_art_left');
 let pop_art_right = document.getElementById('pop_art_right');
 let Artist_bx =document.getElementsByClassName('Artist_bx')[0];

 pop_art_right.addEventListener('click',()=>{
    Artist_bx.scrollLeft+= 230;

 })
 pop_art_left.addEventListener('click',()=>{
    Artist_bx.scrollLeft-= 230;

 })




let songs= [
    
    {
        id:'1',
        songName:`Yeh badndhan toh <br>
        <div class="subtitle">Alka Yagnik</div>`,
        poster: "img/alka/1.jpg"
    },
    {
        id:'2',
        songName:`Mehndi hai rachne wali <br>
        <div class="subtitle">Alka Yagnik</div>`,
        poster: "img/alka/2.jpg"
    },
    {
        id:'3',
        songName:`Laal dupatta <br>
        <div class="subtitle">Alka Yagnik</div>`,
        poster: "img/alka/3.jpg"
    },
    {
        id:'4',
        songName:`Yuhin kat jaega safar <br>
        <div class="subtitle">Alka Yagnik</div>`,
        poster: "img/alka/4.jpg"
    },
    {
        id:'5',
        songName:`Kisi disco mein jaayen <br>
        <div class="subtitle">Alka Yagnik</div>`,
        poster: "img/alka/5.jpg"
    },
    {
        id:'6',
        songName:`Kabhi alvida naa kehna <br>
        <div class="subtitle">Alka Yagnik</div>`,
        poster: "img/alka/6.jpg"
        
        
    },
    {
        id:'7',
        songName:`Aaye ho meri zindagi mein <br>
        <div class="subtitle">Alka Yagnik</div>`,
        poster: "img/alka/7.jpg"
    },
    {
        id:'8',
        songName:`Suraj hua madham <br>
        <div class="subtitle">Alka Yagnik</div>`,
        poster: "img/alka/8.jpg"
    },
    {
        id:'9',
        songName:`Ladki badi anjaani hai <br>
        <div class="subtitle">Alka Yagnik</div>`,
        poster: "img/alka/9.jpg"
    },
    {
        id:'10',
        songName:`Kuch kuch hota hai <br>
        <div class="subtitle">Alka Yagnik</div>`,
        poster: "img/alka/10.jpg"
    },
    {
        id:'11',
        songName:`Kahoo naa pyar hai <br>
        <div class="subtitle">Alka Yagnik</div>`,
        poster: "img/alka/11.jpg"
    },
    {
        id:'12',
        songName:`Nashe si chadh gayi<br>
        <div class="subtitle">alka Aslam</div>`,
        poster: "img/alka/12.jpg"
    },
    {
        id:'13',
        songName:`Ae watan <br>
        <div class="subtitle">alka Aslam</div>`,
        poster: "img/alka/13.jpg"
    },
    {
        id:'14',
        songName:`Agar tum sath ho <br>
        <div class="subtitle">alka Aslam</div>`,
        poster: "img/alka/14.jpg"
    },
    {
        id:'15',
        songName:`Pachtaoge <br>
        <div class="subtitle">alka Aslam</div>`,
        poster: "img/alka/15.jpg"
    },
   
]
let music = new Audio('audio/alka/1.mp3');
//music.play();

Array.from(document.getElementsByClassName('songItem')).forEach(( e , i ) =>{
     e.getElementsByTagName('img')[0].src = songs[i]?.poster;
     e.getElementsByTagName('h5')[0].innerHTML = songs[i]?.songName;
});

// search data start
let search_result = document.getElementsByClassName('search_result')[0];
songs.forEach(element => {
    const {id ,songName, poster }= element;
    // console.log(id);
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id;

    card.innerHTML =`<img src="${poster}" alt="">
                        <div class="content">
                            ${songName}
                            
                            </div>`;

    search_result.appendChild(card);                       
});

let input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup',()=>{
    let input_value= input.value.toUpperCase();
    let items = search_result.getElementsByTagName('a');

    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[index].style.display ="flex";
            
        } else {
            items[index].style.display ="none";
        }

        if (input.value == 0) {
            search_result.style.display="none";
        } else {
            search_result.style.display=" ";  
        }
        
    }
})
// search data end

masterPlay.addEventListener("click", ()=>{
    if (music.paused||music.currentTime<=0) {
        music.play();   
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }
    else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});


const makeAllBackground = () =>{
     Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.getElementsByClassName.background = 'rgb(105,105,105,.0)';
     })
}

const makeAllplays= () =>{
     Array.from(document.getElementsByClassName('playlistPlay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-soundwave');
     })
}

let index=0;
let poster_master_play=document.getElementById('poster_master_play');
let music_downloader=document.getElementById('music_downloader');
let title =document.getElementById('title');

Array.from(document.getElementsByClassName('playlistPlay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index =el .target.id;
        //console.log(index);
        music.src=`audio/alka/${index}.mp3`;
        poster_master_play.src=`img/alka/${index}.jpg`
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        music_downloader.href = `audio/alka/${index}.mp3`; 

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let{songName}=elss;
             title.innerHTML = songName;
             music_downloader.setAttribute('download', songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index  - 1].style.background ="rgb(105,105,105,.1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-soundwave');
        wave.classList.add('active1');
    });
})

 let currentStart = document.getElementById('currentStart');
 let currentEnd = document.getElementById('currentEnd');
 let seek = document.getElementById('seek');
 let bar2= document.getElementById('bar2');
 let dot= document.getElementsByClassName('dot')[0];

 music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration; 
    

    let min1 = Math.floor(music_dur/60);
    let sec1 = Math.floor(music_dur%60);

    //console.log(min1);
    if(sec1 < 10){
        sec1 =`0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr/60);
    let sec2 = Math.floor(music_curr%60);
    if(sec2 < 10){
        sec2 =`0${sec2}`;
    }

    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr/music_dur)*100);
    seek.value =progressBar;
    //console.log(seek.value);
    let seekBar = seek.value;
    bar2.style.width =`${seekBar}%`;
    dot.style.left = `${seekBar}%`;

 });

 seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
 });

 let vol_icon = document.getElementById('vol_icon');
 let vol = document.getElementById('vol');
 let vol_bar = document.getElementsByClassName('vol_bar')[0];
 let vol_dot = document.getElementById('vol_dot');
 
 vol.addEventListener('change',()=>{
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-up');
        vol_icon.classList.remove('bi-volume-down');
        vol_icon.classList.add('bi-volume-off');
    }
    if(vol.value >0){
        vol_icon.classList.remove('bi-volume-up');
        vol_icon.classList.add('bi-volume-down');
        vol_icon.classList.remove('bi-volume-off');
    }
    if(vol.value > 50){
        vol_icon.classList.add('bi-volume-up');
        vol_icon.classList.remove('bi-volume-down');
        vol_icon.classList.remove('bi-volume-off');
    }
    let vol_a = vol.value;
    vol_bar.style.width =`${vol_a}%`;
    vol_dot.style.left =`${vol_a}%`;
    music.volume = vol_a / 100;
 });

    let back = document.getElementById('back');
    let next = document.getElementById('next');

    back.addEventListener('click',()=>{
        index -= 1; 
        if(index<1){
            index = Array.from(document.getElementsByClassName('songItem')).length;
        }
        music.src=`audio/alka/${index}.mp3`;
        poster_master_play.src=`img/alka/${index}.jpg`
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let{songName}=elss;
             title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index  - 1].style.background ="rgb(105,105,105,.1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-soundwave');
        wave.classList.add('active1'); 
    });


    next.addEventListener('click',()=>{
        index ++; 
        if(index > Array.from(document.getElementsByClassName('songItem')).length ){
            index = 1;
        }
        music.src=`audio/alka/${index}.mp3`;
        poster_master_play.src=`img/alka/${index}.jpg`
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let{songName}=elss;
             title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index  - 1].style.background ="rgb(105,105,105,.1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-soundwave');
        wave.classList.add('active1'); 
    });

    let shuffle = document.getElementsByClassName('shuffle')[0];

    shuffle.addEventListener('click',()=>{
        let a = shuffle.innerHTML;

        switch (a) {
            case "next":
                shuffle.classList.add('bi-repeat');
                shuffle.classList.remove('bi-music-note-beamed');
                shuffle.classList.remove('bi-shuffle');
                shuffle.innerHTML = 'repeat';
                break;

            case "repeat":
                shuffle.classList.remove('bi-repeat');
                shuffle.classList.remove('bi-music-note-beamed');
                shuffle.classList.add('bi-shuffle');
                shuffle.innerHTML = 'random';
                break;

            case "random":
                shuffle.classList.remove('bi-repeat');
                shuffle.classList.add('bi-music-note-beamed');
                shuffle.classList.remove('bi-shuffle');
                shuffle.innerHTML = 'next';

                
                break;
        
           
        }
    });

    

   const next_music =() =>{
       // index ++;
        if (index == songs.length) {
            index = 1
            
        } else {
            index++;
        }
        //console.log(index);
        music.src=`audio/alka/${index}.mp3`;
        poster_master_play.src=`img/alka/${index}.jpg`
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        music_downloader.href = `audio/alka/${index}.mp3`; 

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let{songName}=elss;
             title.innerHTML = songName;
             music_downloader.setAttribute('download', songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index  - 1].style.background ="rgb(105,105,105,.1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-soundwave');
        wave.classList.add('active1');
    
   }
   const repeat_music =() =>{
      
         index;
        
        //console.log(index);
        music.src=`audio/alka/${index}.mp3`;
        poster_master_play.src=`img/alka/${index}.jpg`
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        music_downloader.href = `audio/alka/${index}.mp3`; 

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let{songName}=elss;
             title.innerHTML = songName;
             music_downloader.setAttribute('download', songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index  - 1].style.background ="rgb(105,105,105,.1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-soundwave');
        wave.classList.add('active1');
    
   }

   const random_music =() =>{
      
    if (index == songs.length) {
        index = 1
        
    } else {
        index =Math.floor((Math.random()* songs.length) +1);
    }
        //console.log(index);
        music.src=`audio/alka/${index}.mp3`;
        poster_master_play.src=`img/alka/${index}.jpg`
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        music_downloader.href = `audio/${index}.mp3`; 

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let{songName}=elss;
             title.innerHTML = songName;
             music_downloader.setAttribute('download', songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index  - 1].style.background ="rgb(105,105,105,.1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-soundwave');
        wave.classList.add('active1');
    
   }
   music.addEventListener('ended',()=>{
    let b = shuffle.innerHTML;
    switch (b) {
        case 'repeat':
            repeat_music();
            break;
        case 'next':
            next_music();
            break;
        case 'random':
            random_music();
            break;
    
        
    }
   })

