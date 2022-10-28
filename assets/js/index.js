class Project {
    constructor(name, forWho, when, primaryStack, description, demoLink, codeLink, listOfPics) {
      this.name = name;
      this.forWho = forWho;
      this.when = when;
      this.stack = primaryStack;
      this.desc = description;
      this.demoLink = demoLink;
      this.codeLink = codeLink;
      this.listOfPics = listOfPics;
    }
}

let nft = new Project('Numbered Fun Throwables', 'DevMountain', 'March 2022', 'JS/HTML/CSS/PostgreSQL', "Numbered Fun Throwables (NFT) is a browser based game of Liars Dice featuring four unique computer played enemies with unique banter and unlockables. NFT displays competency in basic web design and features other basic technologies such as Bcrypt or Squelize. This is my first solo full stack project created as a capstone to DevMountain's foundations course. A large portion of the characters and design are references to inside jokes from that cohort of students.", 'https://youtu.be/ymX8e5_EteM', "https://github.com/twalker16/Foundations_Capstone", ['./assets/Images/nft/Homepage.jpg','./assets/Images/nft/howToPlay.jpg', './assets/Images/nft/RollingAnimation.gif','./assets/Images/nft/UpdatedBets-makingbet.jpg', './assets/Images/nft/yourBetBackToYou.jpg', './assets/Images/nft/callYouALiar.jpg', './assets/Images/nft/liarCalledCondition.jpg' ,'./assets/Images/nft/Dom.jpg', './assets/Images/nft/ThrowRogan.jpg', './assets/Images/nft/SafeHouse.jpg', 'temp' ] )
let muStash = new Project('Mu Stash', 'DevMountain', 'May 2022', 'Python/Jinja2/HTML/CSS/SQLite', "Music collection and rating site similar in purpose to something like RateMyMusic or Discogs. Site is built off user submitted data and uses tools like pagination to generate results. This was my first solo full stack project built within a Flask framework. It was built as a capstone to the specializations (Python Software Engineering) portion of the DevMountian coursework. The biggest challange that I overcame with this project was working with the database structure that was needed for such a data heavy project, which was ambitious for my abilities at the time.", 'https://youtu.be/Oln_pYjLloM', 'https://github.com/twalker16/Specializations-Capstone', [ './assets/Images/muStash/Register.png', './assets/Images/muStash/Login.png', './assets/Images/muStash/firstResults.png', './assets/Images/muStash/addToWishlist.png', './assets/Images/muStash/addToStash.png', './assets/Images/muStash/addToDatabase.png', './assets/Images/muStash/secondaryResults.png', './assets/Images/muStash/profile.png', './assets/Images/muStash/db.png', 'temp'])
let rU = new Project('Rainbow Underground', 'Freelance', 'in progress', 'JS/HTML/CSS/PostgreSQL', "Mock up point of sale (POS) system designed for dine in resturants. After spending so much time in resturants I felt like it would be a unique challange to rebuild and improve some of the software I've used. In my free time I'm working on implementing features to improve functionality to roles' security profiles such as hosts, servers, cooks, bartenders, managment, and administrative. This is by far my most ambitious coding project, I expect to continue working for the next several months.", '', 'https://github.com/twalker16/Rainbow_Underground_POS', ['./assets/Images/rU/upperLogin.png', './assets/Images/rU/lowerLogin.png', './assets/Images/rU/ticket.png', 'temp'])
let alienInvasion = new Project('Alien Invasion', 'Independent/theCoderSchool', 'May 2022', 'Scratch', "This simple snake like game sees an alien chasing the player trying to survive long enough for the world to stop spinning. This is my first ever scratch project. A project that I produced in my free time for the interview process of theCoderSchool of Cenntenial. This is a simple game developed with the intent to be able to teach a child to acomplish similar results. However, most of my students use typed languages primarily. Feel free to play for yourself", '', 'https://scratch.mit.edu/projects/674678318/', ['./assets/Images/alienInvasion/openingMenu.png', './assets/Images/alienInvasion/easy.png', './assets/Images/alienInvasion/death.png', './assets/Images/alienInvasion/victoryCondition.png', './assets/Images/alienInvasion/winner.png', 'temp'])
let mIVHH = new Project('Mio is Virtual/Horror Hall', 'theCoderSchool of Cenntenial', 'in progress', 'JS/HTML/CSS', "Two visual novel/diverging choice based games being developed with my support by two students in tandum at theCoderSchool. These projects primarily are a passion project for these students, but we've worked on basic file structuing, naming conventions, and have been using our readMe.md as a makeshift planning tool to introduce agile work environments. Feel free to see what we've been working on.", ['https://mioisvirtual.dragonrepl.repl.co/', 'https://horror-hall.caendii.repl.co/'], ['https://replit.com/@DragonRepl/Mioisvirtual?v=1', 'https://replit.com/@Caendii/Horror-Hall?v=1'], ['./assets/Images/mIVHH/mioOpen.png', './assets/Images/mIVHH/mioText.png', './assets/Images/mIVHH/mioChoice.png', './assets/Images/mIVHH/mioPopUp.png', './assets/Images/mIVHH/horrorHallOpen.png', './assets/Images/mIVHH/hhGlitchy.png', 'temp'] )
let sWG = new Project('Star Wars Galactica', 'theCoderSchool of Cenntenial', 'in progress/haitus', 'JS/HTML/CSS', 'Another student of mine was working on a remake of space invaders using star wars themed assets. I had initially mispoken and said Galactica when we decided to start this project and it just stuck. This was a pretty advanced project for my student. We rebuilt a collision detection system, started to give different enemy classes different attributes, and hard coded enemy pathing. He was still new to JS so we focused heavily on query selectors and seeing the connections between our HTML elements and our JS.', 'https://star-wars-galactica.andrewascott.repl.co/', 'https://replit.com/@AndrewAScott/star-wars-galactica?v=1', ['./assets/Images/sWG/start.png', './assets/Images/sWG/depleatedArmy.png', './assets/Images/sWG/shootingBack.png', 'temp'] )
let projects=[nft, muStash, rU, alienInvasion, mIVHH, sWG]
let project1 = {
    img : document.querySelector("#project1Img"),
    name : document.querySelector("#project1Name"),
    whoWhen: document.querySelector('#project1WhoWhen'),
    stack: document.querySelector('#project1Stack'),
    desc: document.querySelector('#project1Desc'),
    demo: document.getElementById('project1Demo'),
    code: document.getElementById('project1Code'),
    index: 0
}
let project2 = {
    img : document.querySelector("#project2Img"),
    name : document.querySelector("#project2Name"),
    whoWhen: document.querySelector('#project2WhoWhen'),
    stack: document.querySelector('#project2Stack'),
    desc: document.querySelector('#project2Desc'),
    demo: document.getElementById('project2Demo'),
    code: document.getElementById('project2Code'),
    index: 1
}
function resolveAfter3SecondsProdj1(index, i) {
    return new Promise(resolve => {
        setTimeout(() => {
            if(index === project1.index){
                if(projects[index].listOfPics[projects[index].listOfPics.indexOf(`${project1.img.getAttribute('src')}`)+2]){
                    // console.log(projects[index].listOfPics[projects[index].listOfPics.indexOf(`${project1.img.getAttribute('src')}`)+2])
                    project1.img.setAttribute('src', `${projects[index].listOfPics[i]}`)
                    resolve('picture switched');
                }else{
                    project1.img.setAttribute('src', `${projects[index].listOfPics[0]}`)
                    resolve('restarted');
                }
            }   
        }, 2000);
    });
}
async function project1PicChange(){
    if(projects[project1.index]){
        let index = project1.index
        for(let i=0; i< projects[index].listOfPics.length; i++){
            let result = await resolveAfter3SecondsProdj1(index, i)
            // console.log(result)
            if(result === 'restarted'){
                project1PicChange()
            }
        }
    }
}
function resolveAfter3SecondsProdj2(index, i) {
    return new Promise(resolve => {
        setTimeout(() => {
            if(index === project2.index){
                if(projects[index].listOfPics[projects[index].listOfPics.indexOf(`${project2.img.getAttribute('src')}`)+2]){
                    // console.log(projects[index].listOfPics[projects[index].listOfPics.indexOf(`${project1.img.getAttribute('src')}`)+2])
                    project2.img.setAttribute('src', `${projects[index].listOfPics[i]}`)
                    resolve('picture switched');
                }else{
                    project2.img.setAttribute('src', `${projects[index].listOfPics[0]}`)
                    resolve('restarted');
                }
            }   
        }, 2000);
    });
}
async function project2PicChange(){
    if(projects[project2.index]){
        let index = project2.index
        for(let i=0; i< projects[index].listOfPics.length; i++){
            let result = await resolveAfter3SecondsProdj2(index, i)
            if(result === 'restarted'){
                project2PicChange()
            }
        }
    }
}
function updateProjects(){
    if(typeof projects[project1.index].demoLink === 'string'){
        if(projects[project1.index].demoLink!=''){
            project1.demo.setAttribute('href', `${projects[project1.index].demoLink}`)
            project1.demo.setAttribute('target', `_blank`)
            project1.demo.setAttribute('rel', `noopener noreferrer`)
            project1.demo.textContent='Demo'
        }else{
            project1.demo.setAttribute('href', ``)
            project1.demo.setAttribute('target', ``)
            project1.demo.setAttribute('rel', ``)
            project1.demo.textContent=''
            // project1.demo.textContent='Demo (Coming Soon)'
        }
    }else{
        project1.demo.setAttribute('href', `${projects[project1.index].demoLink[0]}`)
        project1.demo.setAttribute('target', `_blank`)
        project1.demo.setAttribute('rel', `noopener noreferrer`)
        project1.demo.textContent='Demo'
        let demo2 = document.createElement('a')
        demo2.classList='projectDemo2'
        document.querySelector('.pC1').appendChild(demo2)
        demo2.setAttribute('href', `${projects[project1.index].demoLink[1]}`)
        demo2.setAttribute('target', `_blank`)
        demo2.setAttribute('rel', `noopener noreferrer`)
        demo2.textContent='Demo'
    }
    if(typeof projects[project1.index].codeLink === 'string'){
        project1.code.setAttribute('href', `${projects[project1.index].codeLink}`)
    }else{
        project1.code.setAttribute('href', `${projects[project1.index].codeLink[0]}`)
        let code2 = document.createElement('a')
        code2.classList='projectCode2'
        document.querySelector('.pC1').appendChild(code2)
        code2.setAttribute('href', `${projects[project1.index].codeLink[1]}`)
        code2.setAttribute('target', `_blank`)
        code2.setAttribute('rel', `noopener noreferrer`)
        code2.textContent='Source Code'
    }
    project1.img.setAttribute('src', `${projects[project1.index].listOfPics[0]}`)
    project1.stack.textContent = projects[project1.index].stack
    project1.desc.textContent = projects[project1.index].desc
    project1.name.textContent = projects[project1.index].name
    project1.whoWhen.textContent = `${projects[project1.index].forWho}, ${projects[project1.index].when}`


    // if(projects[project2.index].demoLink!=''){
    //     project2.demo.setAttribute('href', `${projects[project2.index].demoLink}`)
    //     project2.demo.setAttribute('target', `_blank`)
    //     project2.demo.setAttribute('rel', `noopener noreferrer`)
    //     project2.demo.textContent='Demo'
    // }else{
    //     project2.demo.setAttribute('href', `#projectsHeader`)
    //     project2.demo.setAttribute('target', ``)
    //     project2.demo.setAttribute('rel', ``)
    //     project2.demo.textContent='Demo (Coming Soon)'
    // }

    if(typeof projects[project2.index].demoLink === 'string'){
        if(projects[project2.index].demoLink!=''){
            project2.demo.setAttribute('href', `${projects[project2.index].demoLink}`)
            project2.demo.setAttribute('target', `_blank`)
            project2.demo.setAttribute('rel', `noopener noreferrer`)
            project2.demo.textContent='Demo'
        }else{
            project2.demo.setAttribute('href', ``)
            project2.demo.setAttribute('target', ``)
            project2.demo.setAttribute('rel', ``)
            project2.demo.textContent=''
            // project2.demo.textContent='Demo (Coming Soon)'
        }
    }else{
        project2.demo.setAttribute('href', `${projects[project2.index].demoLink[0]}`)
        project2.demo.setAttribute('target', `_blank`)
        project2.demo.setAttribute('rel', `noopener noreferrer`)
        project2.demo.textContent='Demo'
        let demo2 = document.createElement('a')
        demo2.classList='projectDemo2'
        document.querySelector('.pC2').appendChild(demo2)
        demo2.setAttribute('href', `${projects[project2.index].demoLink[1]}`)
        demo2.setAttribute('target', `_blank`)
        demo2.setAttribute('rel', `noopener noreferrer`)
        demo2.textContent='Demo'
    }
    if(typeof projects[project2.index].codeLink === 'string'){
        project2.code.setAttribute('href', `${projects[project2.index].codeLink}`)
    }else{
        project2.code.setAttribute('href', `${projects[project2.index].codeLink[0]}`)
        let code2 = document.createElement('a')
        code2.classList='projectCode2'
        document.querySelector('.pC2').appendChild(code2)
        code2.setAttribute('href', `${projects[project2.index].codeLink[1]}`)
        code2.setAttribute('target', `_blank`)
        code2.setAttribute('rel', `noopener noreferrer`)
        code2.textContent='Source Code'
    }
    project2.code.setAttribute('href', `${projects[project2.index].codeLink}`)
    project2.img.setAttribute('src', `${projects[project2.index].listOfPics[0]}`)
    project2.stack.textContent = projects[project2.index].stack
    project2.desc.textContent = projects[project2.index].desc
    project2.name.textContent = projects[project2.index].name
    project2.whoWhen.textContent = `${projects[project2.index].forWho}, ${projects[project2.index].when}`
    
    
    project1PicChange()
    project2PicChange()
}
updateProjects()
document.querySelector('.previousArrow').addEventListener('click', ()=>{
    
    if(projects[project2.index-1]&&projects[project1.index-1]){
        project1.index=project1.index-1
        project2.index=project2.index-1
    }else if(project1.index===0){
        project1.index=projects.length-1
        project2.index=0
    }else{
        project1.index=projects.length-2
        project2.index=projects.length-1
    }
    if(document.querySelector('.projectCode2')){
        document.querySelector('.projectDemo2').remove()
        document.querySelector('.projectCode2').remove()
    }
    updateProjects()
})
document.querySelector('.nextArrow').addEventListener('click', ()=>{
    if(projects[project2.index+1]&&projects[project1.index+1]){
        project1.index=project1.index+1
        project2.index=project2.index+1
    }else if(project2.index===projects.length-1){
        project1.index=projects.length-1
        project2.index=0
    }else{
        project1.index=0
        project2.index=1
    }
    if(document.querySelector('.projectCode2')){
        
        document.querySelector('.projectDemo2').remove()
        document.querySelector('.projectCode2').remove()
    }
    updateProjects()
})