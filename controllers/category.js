const getData = (req, res) => {
    const data = [
      {
        id: "1",
        claps: "500",
        title: "Spider-Man: No Way Home",
        category: "Travel",
        date: "December 16 2021",
        author: "Rahul Rattan",
        image:
          "https://www.scotsman.com/webimg/b25lY21zOmJlYzMzOTM4LTJiNWMtNDMwMy05NTQ1LWRjZWNiZmYzYWM1ZjpmZmI1YzNjOC05YmU0LTRhZTYtOTE5Yy1iMTg4ZmFhNmNmYzg=.jpg?width=2048&enable=upscale",
        content:
          "With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
        tags: ["React", "Javascript", "Animation"],
      },
      {
        id: "2",
        claps: "500",
        title: "Doctor Strange in the Multiverse of Madness",
        category: "Travel",
        date: "August 21 2017",
        author: "Rahul Rattan",
        image:
          "https://images.thedirect.com/media/article_full/doctor-strange-2-mcu-filming.jpg",
        content:
          "Dr Stephen Strange casts a forbidden spell that opens a portal to the multiverse. However, a threat emerges that may be too big for his team to handle.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum at leo at iaculis.",
          tags: ["React", "Javascript", "Animation"],
      },
      {
        id: "3",
        claps: "500",
        title: "Shang-Chi and The Legend of The Ten Rings",
        category: "Travel",
        date: "August 21 2017",
        author: "Nikari Sharma",
        tags: ["React", "Javascript", "Animation"],
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpfRIwkwnuI-sL43pnNVNDqMtE6wv1c9VC-zJB06NO5jjp7iTl2-9twqhqthByFfK5fho&usqp=CAU",
        content:
          "Marvel Studios' Shang-Chi and The Legend of The Ten Rings stars Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization. The film also stars Tony Leung as Wenwu, Awkwafina as Shang-Chi's friend Katy and Michelle Yeoh as Jiang Nan, as well as Fala Chen, Meng'er Zhang, Florian Munteanu and Ronny Chieng.",
      },
      {
        id: "4",
        claps: "500",
        title: "How to Start a Travel blog!!",
        category: "Travel",
        date: "August 21 2017",
        author: "Nikari Sharma",
        tags: ["React", "Javascript", "Animation"],
        image:
          "https://justglobetrotting.com/wp-content/uploads/2018/04/how-to-start-travel-blog.jpg",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum at leo at iaculis. Fusce vitae velit aliquet nisl malesuada pretium. Maecenas finibus ultricies nisl ut commodo. Nulla ac mi vestibulum, finibus felis eu, sollicitudin diam. Aliquam sagittis tortor eu libero placerat, sed placerat dui consequat. Praesent bibendum est tortor, fringilla luctus magna rutrum vitae. Sed a orci imperdiet, porta enim vel, tristique arcu. Nunc dapibus erat sapien. Ut pharetra, lorem a consequat elementum, lorem odio tempus justo, ac dignissim felis mi et ex. Aliquam luctus nibh vel porttitor semper. Nulla eu ante feugiat, rhoncus arcu nec, consectetur lectus. Etiam urna massa, fermentum at ornare sed, mattis quis nulla. Vestibulum sit amet viverra turpis. Cras suscipit dictum venenatis.",
      },
      {
        id: "5",
        claps: "500",
        title: "Rainforest Adventure",
        category: "Travel",
        date: "August 21 2017",
        author: "Nikari Sharma",
        tags: ["React", "Javascript", "Animation"],
        image:
          "https://www.treehugger.com/thmb/QolJfOYFmxwIH6Sxv5SBqY8Kq-M=/1885x1414/smart/filters:no_upscale()/GettyImages-1273584292-cbcd5f85f4c646d58f7a7fa158dcaaeb.jpg",
        content:
          "A rainforest is an area of tall, mostly evergreen trees and a high amount of rainfall. Rainforests are Earth's oldest living ecosystems, with some surviving in their present form for at least 70 million years. ... The largest rainforests on Earth surround the Amazon River in South America and the Congo River in Africa.",
      },
      {
        id: "6",
        claps: "500",
        title: "Joshua Tree Overnight Adventure",
        category: "Travel",
        date: "August 21 2017",
        author: "Nikari Sharma",
        tags: ["React", "Javascript", "Animation"],
        image:
          "https://static.toiimg.com/thumb/msid-79510927,width-900,height-1200,resizemode-6.cms",
        content:
          "Josh Gates is an American television presenter and television producer. He was the host and co-executive producer of Destination Truth and Stranded on Syfy, and currently hosts and co-executive produces The Discovery Channel series Expedition: Unknown and also Legendary Locations.",
      },
      {
        id: "7",
        claps: "500",
        title: "Joshua Tree Overnight Adventure",
        category: "Travel",
        date: "August 21 2017",
        author: "Nikari Sharma",
        tags: ["React", "Javascript", "Animation"],
        image:
          "https://image.shutterstock.com/image-photo/forest-road-on-cloudy-day-260nw-1960786579.jpg",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum at leo at iaculis. Fusce vitae velit aliquet nisl malesuada pretium. Maecenas finibus ultricies nisl ut commodo. Nulla ac mi vestibulum, finibus felis eu, sollicitudin diam. Aliquam sagittis tortor eu libero placerat, sed placerat dui consequat. Praesent bibendum est tortor, fringilla luctus magna rutrum vitae. Sed a orci imperdiet, porta enim vel, tristique arcu. Nunc dapibus erat sapien. Ut pharetra, lorem a consequat elementum, lorem odio tempus justo, ac dignissim felis mi et ex. Aliquam luctus nibh vel porttitor semper. Nulla eu ante feugiat, rhoncus arcu nec, consectetur lectus. Etiam urna massa, fermentum at ornare sed, mattis quis nulla. Vestibulum sit amet viverra turpis. Cras suscipit dictum venenatis.",
      },
      {
        id: "8",
        claps: "500",
        title: "The Adventure Gallery",
        category: "Travel",
        date: "August 21 2017",
        author: "Rahul Rattan",
        tags: ["React", "Javascript", "Animation"],
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDs7t68P1t9wNALdy805hfMr1U1-Mz6dJnMg&usqp=CAU",
        content:
          "The coronavirus pandemic has had a devastating impact around the world. Once we finally emerge from the restrictions we've been living under in this country and abroad to bring this virus to an end, the world as we know it is going to be a very different place. Art Adventure gallery has not been immune to the devastating impact of the pandemic. We've been closed since March, and have, since July, been open by appointment only. If you miss us as much as we miss you and need a special gift you may call Brenda ",
      },
      {
        id: "9",
        claps: "500",
        title: "Greatness of Bollywood",
        category: "Bollywood",
        date: "August 21 2017",
        author: "Rahul Rattan",
        tags: ["React", "Javascript", "Animation"],
        image:
          "https://image.shutterstock.com/image-vector/bollywood-word-on-gradient-background-260nw-1443999785.jpg",
        content:
          "Hindi cinema, often known as Bollywood and  formerly as Bombay cinema, is the Indian Hindi-language film industry based in Mumbai. The term is a portmanteau of Bombay and Hollywood",
      },
      {
        id: "10",
        claps: "500",
        title: "Sara ali khan in Bollywood",
        category: "Bollywood",
        date: "August 21 2017",
        author: "Rahul Rattan",
        tags: ["React", "Javascript", "Animation"],
        image:
          "https://images.hindustantimes.com/img/2022/02/03/550x309/ANI-20211212002-0_1640114127389_1643883197969.jpg",
        content:
          "On Thursday, Sara Ali Khan interacted with her fans by answering their questions in an interactive  session on Instagram. When a fan asked Sara, about the worst prank she has pulled on someone, she posted a video from the time when she pushed her spot girl into the pool.",
      },
      {
        id: "11",
        claps: "500",
        title: "Disha in Bollywood",
        category: "Bollywood",
        date: "August 21 2017",
        author: "Rahul Rattan",
        tags: ["React", "Javascript", "Animation"],
        image:
          "https://images.hindustantimes.com/img/2022/02/03/150x84/b999811a-84df-11ec-addc-808998e53739_1643885883958.jpg",
        content:
          "Disha Patani is one of the most successful actresses in Bollywood right now. Her journey in the industry has been nothing short of inspiring. From her stunning red carpet appearances to chic city sightings, the beauty never misses a chance to make heads turn with her extraordinary fashion affair. Today, we bring you a throwback to the time when she suffered a head injury and lost her memory for six months. Scroll below to read the scoop.",
      },
      {
        id: "12",
        claps: "500",
        title: "Ritika singh's Kadhaipoma!!",
        category: "Bollywood",
        date: "August 21 2017",
        author: "Ritika Hedge",
        tags: ["React", "Javascript", "Animation"],
        image:
          "https://img.studioflicks.com/wp-content/uploads/2020/02/15123643/Ritika-Singhs-special-certificate-for-Ashok-Selvan.jpg",
        content:
          "Actor Simbu recently received his honorary doctorate for his distinguished excellence in cinema. He was last seen on the big screen in Venkat Prabhu's 'Maanaadu' which was a successful hit. While the actor is now occupied with many projects, just a couple of days ago, a piece of news surfaced that the actor will be reportedly joining hands with director Aswath Marimuthu.",
      },
      {
        id: "13",
        claps: "500",
        title: "Rakul Preet Singh new Debut",
        category: "Bollywood",
        date: "August 21 2017",
        author: "Ritika Hedge",
        tags: ["React", "Javascript", "Animation"],
        image:
          "https://timesofindia.indiatimes.com/thumb/msid-75609340,width-800,height-600,resizemode-4/75609340.jpg?imglength=82484",
        content:
          "Bollywood actor Akshay Kumar will soon be seen sharing screen space with Rakul Preet Singh in the Hindi remake of the Tamil film 'Ratsasan'. The film recently went on floors in Mussoorie, where Akshay and Rakul were seen flagging off the shoot at St George's College and Barlow Ganj's main market.",
      },
      {
        id: "14",
        claps: "500",
        title: "Once Upon a Time in Hollywood",
        category: "Hollywood",
        date: "August 21 2017",
        author: "Ritika Hedge",
        tags: ["React", "Javascript", "Animation"],
        image:
          "https://media.newyorker.com/photos/5d3c802a35c964000896ae60/1:1/w_1706,h_1706,c_limit/Brody-TarantinoHollywood.jpg",
        content:
          "As we all know too well, Once Upon a Time in Hollywood is one of stylish auteur Quentin Tarantino's best movies: it's a gorgeous love letter to Tinseltown of a bygone era, albeit one punctuated with enough blood and viscera to paint the studio set of a war flick.    Relatedly, the movies protagonist, washed-up actor Rick Dalton (Leonardo DiCaprio), is one of the more likable leading men Tarantino has committed to the page. And it seems as though the veteran filmmaker liked him too, given hes written (almost) his entire professional life into a stand-alone novel, as revealed to the Empire Podcast.",
      },
      {
        id: "15",
        claps: "500",
        title: "Ten must watch film in Hollywood",
        category: "Hollywood",
        date: "August 21 2017",
        author: "Ritika Hedge",
        tags: ["React", "Javascript", "Animation"],
        image:
          "https://www.koimoi.com/wp-content/new-galleries/2021/01/from-mad-max-fury-road-to-1917-a-look-at-10-must-watch-hollywood-movies-of-the-last-10-years-0001.jpg",
        content:
          "It's a big month for streaming as Wes Anderson's “The French Dispatch” and Guillermo del Toro's “Nightmare Alley,” two of the most acclaimed 2021-22 awards contenders, both arrive on HBO Max. Their streaming arrivals couldn't be better timed as Oscar nominations are right around the corner. “Nightmare Alley” is also streaming on Hulu, giving more than just HBO Max subscribers the chance to see del Toro's star-studded noir drama.",
      },
      {
        id: "16",
        claps: "500",
        title: "Captin Marvel from MCU",
        category: "Hollywood",
        date: "August 21 2017",
        author: "Ritika Hedge",
        tags: ["React", "Javascript", "Animation"],
        image:
          "https://1.bp.blogspot.com/-2JTjxKGtEIE/XTgGNaodMVI/AAAAAAAAS3E/UAQ4nx9eiWcxUd5GbXTI-BNfrVT0XGRgACLcBGAs/s640/captain%2Bmarvel.JPG",
        content:
          "As one of the newest heroes in the MCU, Carol Danvers aka Captain Marvel has already made a considerable impression. She sadly hasn't gotten much screentime with the other heroes of the universe, but from her solo movie and her brief appearance in Avengers: Endgame, she has managed to make a surprising number of friends.",
      },
      {
        id: "17",
        claps: "500",
        title: "Paramount's Bond with James Bond",
        category: "Hollywood",
        date: "August 21 2017",
        author: "Steve Murray",
        tags: ["React", "Javascript", "Animation"],
        image:
          "https://img.republicworld.com/republic-prod/stories/images/xxhdpi/aflifh6ao5w1u1bk_1639573138.jpeg",
        content:
          "Now that Daniel Craig has hung up his holster after No Time to Die, and the James Bond franchise is once again due a new actor to take on the role of 007 for Bond 26, a lesser-known name would, again, be the perfect choice. Daniel Craig himself wasn't very well known at the time of Casino Royale (his first outing), was derogatorily labeled as 'Blonde Bond' by the press at the time of being taken on as James Bond, and, at first, many people were left wondering who he was. But Casino Royale's darkest moments for James Bond soon turned to bright light, later being touted by many as the very greatest James Bond film ever. Repeating a similar casting trick could be the key to continued success for the franchise.",
      },
      {
        id: "18",
        claps: "500",
        title: "Gorgeous Emma Watson!",
        category: "Hollywood",
        date: "August 21 2017",
        author: "Gagan Singh",
        tags: ["React", "Javascript", "Animation"],
        image:
          "https://filmfare.wwmindia.com/content/2021/aug/hollywoodmoviesyoucantmiss11630327835.jpg",
        content:
          "There are perfectly good celebrity style moments, and then there are the looks that really stick with you, the ones you try desperately to recreate at home. In 'Great Outfits in Fashion History,' Fashionista editors are revisiting their all-time favorite lewks. These days, if an actor is cast as a live-action Disney Princess, you can generally bet she'll dress the part on the red carpet, too. It's a fashion playbook pioneered by Elle Fanning during her turn as Aurora and perfected by Lily James during her time as Cinderella. (Liu Yifei as Mulan and Naomi Scott as Jasmine both added their own twists to the move, too.)",
      },
      {
        id: "19",
        claps: "500",
        title: "Most Grossed in Hollywood",
        category: "Hollywood",
        date: "August 21 2017",
        author: "Gagan Singh",
        tags: ["React", "Javascript", "Animation"],
        image:
          "https://www.bollywoodhungama.com/wp-content/uploads/2020/04/Hollywood-movies-have-amassed-only-Rs.-50-crores-at-the-India-box-office-in-the-first-quarter-of-2020.jpg",
        content:
          "With $1.6 billion in box office receipts, the latest Marvel Studios film Spider-Man: No Way Home has swung into the 6th position of the top highest grossing movies in history. This would have been impressive before the pandemic, now it is downright exceptional, even for an MCU movie.",
      },
      {
        id: "20",
        claps: "500",
        title: "Batman and The Vengence",
        category: "Hollywood",
        date: "August 21 2017",
        author: "Gagan Singh",
        tags: ["React", "Javascript", "Animation"],
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQubAUOPoCA0tRK7-t7e0hCujgTHzBpZFK0Aw&usqp=CAU",
        content:
          "Batman is vengeance. H'’s also the reason comic book collectors will soon be making a withdrawal from Gotham National Bank. DC Comics is marking the character's theatrical return with nine variant comic covers for Batman-related series.",
      },
      {
        id: "21",
        claps: "500",
        title: "Apple's Future TechQuaters",
        category: "Technology",
        date: "August 21 2017",
        author: "Gagan Singh",
        tags: ["React", "Javascript", "Animation"],
        image:
          "https://internationaldirector.com/wp-content/uploads/2018/10/Apple-Silicon-Valley.jpg",
        content:
          "Apple's vision of a more private web is not necessarily a more profitable one for internet companies that depend on advertising revenue. That lesson was clear Wednesday in an earnings report from Meta, the company that Mark Zuckerberg founded as Facebook. Meta said privacy features introduced by Apple last year could cost Zuckerberg's company $10 billion in lost sales this year.",
      },
      {
        id: "22",
        claps: "500",
        title: "Google's New Hires",
        category: "Technology",
        date: "August 21 2017",
        author: "Gagan Singh",
        tags: ["React", "Javascript", "Animation"],
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToQYf8Fk5fN_QOM_kOHH8PcXVpbVX6veU_H7Tm62baDuWtMenA9BnJfVskp8fDt3vPuOs&usqp=CAU",
        content:
          "Google on Monday announced plans to open a new office in Pune this year, that will hire professionals for building advanced enterprise cloud technologies.  Expected to open in the second half this year, the facility will hire people for Cloud product engineering, technical support and global delivery centre organisations.",
      },
      {
        id: "23",
        claps: "500",
        title: "Socil Media's Downside",
        category: "Technology",
        date: "August 21 2017",
        author: "Gagan Singh",
        tags: ["React", "Javascript", "Animation"],
        image:
          "https://img.theepochtimes.com/assets/uploads/2020/10/26/Big-tech-700x420.jpg",
        content:
          "Over the last 20 years, social media has risen from relative obscurity to become a fully accepted and integrated part of everyday life. However, despite social media's ubiquity, the research on how it affects mental health remains inconclusive.",
      },
      {
        id: "24",
        claps: "500",
        title: "Oasis Technoloogy Center",
        category: "Technology",
        date: "August 21 2017",
        author: "Gagan Singh",
        tags: ["React", "Javascript", "Animation"],
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXeSEB3t6AmjeDlMSlzBtNRfLDRKyfrWo4eQ&usqp=CAU",
        content:
          "Doha: The Chairman of Ooredoo, H E Sheikh Abdullah bin Mohammed bin Saud Al Thani, inaugurated Ooredoo's latest contribution to Qatar's knowledge-based economy, the Oasis technology laboratory.  Oasis - which stands for “Ooredoo Advanced Smart Innovative Solutions” - is a new facility for the development, testing and demonstration of original IT and communication solutions.   Among the first of its kind in the region",
      },
      {
        id: "25",
        claps: "500",
        title: "New Normal Fitness",
        category: "Fitness",
        date: "August 21 2017",
        author: "Gagan Singh",
        tags: ["React", "Javascript", "Animation"],
        image:
          "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/man-deadlift-1296x728-header.jpg?w=1155&h=1528",
        content:
          "The COVID-19 pandemic has brought this fast-moving world to a standstill. The impact of this pandemic is massive, and the only strategy to curb the rapid spread of the disease is to follow social distancing. The imposed lockdown, resulting in the closure of business activities, public places, fitness and activity centers, and overall social life, has hampered many aspects of the lives of people including routine fitness activities of fitness freaks, which has resulted in various psychological issues and serious fitness and health concerns.",
      },
      {
        id: "26",
        claps: "500",
        title: "Best Acrobotic Fitness",
        category: "Fitness",
        date: "August 21 2017",
        author: "Gagan Singh",
        tags: ["React", "Javascript", "Animation"],
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCt6-337nd7-6j0WgHEe8PQkab8AeqiEoSJTHehFBd-O0efxyscHMGXKynk-3zMByUEWA&usqp=CAU",
        content:
          "Doing crunches and sit ups aren't the only way to get in shape. Flips, climbs, spins and other acrobatic moves can also yield the results you desire in an exercise regimen. Several sports such as gymnastics, pole dancing and parkour involve different types of acrobatic exercises. In addition to adding variation to your normal workout routine, acrobatic exercises can improve flexibility and build strength. And you don't need to be a trained acrobat to do some of them. Many acrobatic exercises are simple enough for beginners to learn.",
      },
      {
        id: "27",
        claps: "500",
        title: "Youth Fitness Secret",
        category: "Fitness",
        date: "August 21 2017",
        author: "Manish Agarwal",
        tags: ["React", "Javascript", "Animation"],
        image:
          "https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg?size=626&ext=jpg&ga=GA1.1.2043781874.1643241600",
        content:
          "No teen is doomed to be overweight. A 2010 European study showed that even teenagers with gene-linked obesity are able to overcome it by exercising for 60 minutes a day. For the teens in the study who exercised regularly, it paid off in lower body fat, a lower body mass index (BMI), and a smaller waist.But an hour of exercise a day can seem like a lot. If your overweight teenager is not physically active or is self-conscious about their body, it may feel overwhelming.",
      },
      {
        id: "28",
        claps: "500",
        title: "Benefits of Yoga",
        category: "Fitness",
        date: "August 21 2017",
        author: "Manish Agarwal",
        tags: ["React", "Javascript", "Animation"],
        image:
          "https://contents.mediadecathlon.com/s853520/k$e3afc7662b2d5122b8a8df099509565d/origami%20domyos%20hp%20domyos%20short%20fit%20%20500%20reg%20gym%20noir%20%20%20008%20%20%20%20%20expires%20on%2013%2008%202024.jpg",
        content:
          "Yoga offers physical and mental health benefits for people of all ages. And, if you're going through an illness, recovering from surgery or living with a chronic condition, yoga can become an integral part of your treatment and potentially hasten healing. A yoga therapist can work with patients and put together individualized plans that work together with their medical and surgical therapies. That way, yoga can support the healing process and help the person experience symptoms with more centeredness and less distress.",
      },
      {
        id: "29",
        claps: "500",
        title: "Health and Food",
        category: "Food",
        date: "August 21 2017",
        author: "Manish Agarwal",
        tags: ["React", "Javascript", "Animation"],
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwS_Kino7HS65tPFjQ4HFAEBuS0oUuUcM7iMuQS--UCBwUw8LI5V7LULSiZQlNrmb1AyE&usqp=CAU",
        content:
          "Food has been given a very significant place in our lives because it is our primary requirement. It is our basic need because it is the source of mental and physical energy. The food that we eat, not only affects our body and the efficiency of our mind but directly affects our nature and habits. The Knowledge of balanced diet is therefore indispensable to “Good health”.  “Balanced diet” has also been discussed in Yoga science. However its reference is not akin to the diet tables provided to us by the modern day dieticians giving daily requirements of fat, proteins and minerals etc. We will discuss briefly the relation between Food and health.",
      },
      {
        id: "30",
        claps: "500",
        title: "Effects of Fastfood",
        category: "Food",
        date: "August 21 2017",
        author: "Manish Agarwal",
        tags: ["React", "Javascript", "Animation"],
        image:
          "https://www.adorama.com/alc/wp-content/uploads/2018/02/BBBURGER8-1024x683-1024x683.jpg",
        content:
          "Most fast food, including drinks and sides, are loaded with carbohydrates with little to no fiber.   When your digestive system breaks down these foods, the carbs are released as glucose (sugar) into your bloodstream. As a result, your blood sugar increases. Your pancreas responds to the surge in glucose by releasing insulin. Insulin transports sugar throughout your body to cells that need it for energy. As your body uses or stores the sugar, your blood sugar returns to normal. This blood sugar process is highly regulated by your body, and as long as you're healthy, your organs can properly handle these sugar spikes.",
      },
      {
        id: "31",
        claps: "500",
        title: "Vegetable's Diet",
        category: "Food",
        date: "August 21 2017",
        author: "Manish Agarwal",
        tags: ["React", "Javascript", "Animation"],
        image:
          "https://media.istockphoto.com/photos/varied-food-carbohydrates-protein-vegetables-fruits-dairy-legumes-on-picture-id1218254547?b=1&k=20&m=1218254547&s=170667a&w=0&h=mOEC7x7qU5NC78mCULs-jAPeLkxy8opOvIbGSnwmAyw=",
        content:
          "A diet rich in vegetables and fruits can lower blood pressure, reduce the risk of heart disease and stroke, prevent some types of cancer, lower risk of eye and digestive problems, and have a positive effect upon blood sugar, which can help keep appetite in check. Eating non-starchy vegetables and fruits like apples, pears, and green leafy vegetables may even promote weight loss. [1] Their low glycemic loads prevent blood sugar spikes that can increase hunger.",
      },
      {
        id: "32",
        claps: "500",
        title: "Hacks in Food",
        category: "Food",
        date: "August 21 2017",
        author: "Manish Agarwal",
        image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdnfWLhLUtehyG-hHuTc0duDDX26lpoleK7w&usqp=CAU",
        content:
        "Good food doesn't have to be complicated. With just a few simple tricks you can save time, money and hassle. From getting the most out of leftover pizza to pimping your mac 'n' cheese and making the perfect poached egg, these handy hacks might just change how you cook and eat forever.",
        tags: ["React", "Javascript", "Animation"],
      },
      {
        id: "33",
        claps: "500",
        title: "Networth of Nutella",
        category: "Food",
        date: "August 21 2017",
        author: "Manish Agarwal",
        image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-mwEJm_qc8aBE97d9MQa7k_Eczn_k_Om4GIJFZJAE7E92bp4a3XOU4wzsvdeqkXF_ows&usqp=CAU",
        content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum at leo at iaculis. Fusce vitae velit aliquet nisl malesuada pretium. Maecenas finibus ultricies nisl ut commodo. Nulla ac mi vestibulum, finibus felis eu, sollicitudin diam. Aliquam sagittis tortor eu libero placerat, sed placerat dui consequat. Praesent bibendum est tortor, fringilla luctus magna rutrum vitae. Sed a orci imperdiet, porta enim vel, tristique arcu. Nunc dapibus erat sapien. Ut pharetra, lorem a consequat elementum, lorem odio tempus justo, ac dignissim felis mi et ex. Aliquam luctus nibh vel porttitor semper. Nulla eu ante feugiat, rhoncus arcu nec, consectetur lectus. Etiam urna massa, fermentum at ornare sed, mattis quis nulla. Vestibulum sit amet viverra turpis. Cras suscipit dictum venenatis.",
        tags: ["React", "Javascript", "Animation"],
      },
      {
        id: "34",
        claps: "500",
        title: "McDonalds Customers Care",
        category: "Food",
        date: "August 21 2017",
        author: "Manish Agarwal",
        image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS03bjrUH-83Fu2m948lvggZmtLO94hdAH49w&usqp=CAU",
        content:
        "Nutella Dip  Take some whipping cream and whip it with hand or in a machine, until stiff peaks start forming. In another bowl, mix some cream cheese, powdered sugar and Nutella. Fold the whipping cream in with the cream cheese and nutella mix and serve with different kinds of fruits and chocolate sauce.",
        tags: ["React", "Javascript", "Animation"],
      },
      {
        id: "35",
        claps: "500",
        title: "Travel Latest Destination",
        category: "Travel",
        date: "August 21 2017",
        author: "Manish Agarwal",
        image:
        "https://images.unsplash.com/photo-1508682641856-78948a748357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2FzdGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum at leo at iaculis. Fusce vitae velit aliquet nisl malesuada pretium. Maecenas finibus ultricies nisl ut commodo. Nulla ac mi vestibulum, finibus felis eu, sollicitudin diam. Aliquam sagittis tortor eu libero placerat, sed placerat dui consequat. Praesent bibendum est tortor, fringilla luctus magna rutrum vitae. Sed a orci imperdiet, porta enim vel, tristique arcu. Nunc dapibus erat sapien. Ut pharetra, lorem a consequat elementum, lorem odio tempus justo, ac dignissim felis mi et ex. Aliquam luctus nibh vel porttitor semper. Nulla eu ante feugiat, rhoncus arcu nec, consectetur lectus. Etiam urna massa, fermentum at ornare sed, mattis quis nulla. Vestibulum sit amet viverra turpis. Cras suscipit dictum venenatis.",
        tags: ["React", "Javascript", "Animation"],
      },
    ];
    if (req.params.id) {
      const newUser = data.filter((value) => value.id === req.params.id); // Number -typecasting
      res.send(newUser);
      console.log("block1");
    } else if (req.query.category) {
      const newUser = data.filter(
        (value) => value.category === req.query.category
      );
      res.send(newUser);
      console.log("block2",req.query.category);
    } else {
      res.send(data);
      console.log("block3");
    }
  };
  module.exports.getDataFun = getData;