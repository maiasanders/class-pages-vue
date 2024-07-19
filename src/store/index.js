import { createStore as _createStore } from 'vuex';

export function createStore() {
    return _createStore({
        state: {
            classBanners: {
                purple: '../assets/img/jean-beller-RjfVzePmmfM-unsplash.jpg',
                gray: '../assets/img/600x400placeholder.svg',
                blue: '../assets/img/600x400placeholder.svg',
                green: '../assets/img/600x400placeholder.svg'
            },
            classLogos: {
                purple: '../assets/img/purple-dragon.webp',
                gray: '../assets/img/600x400placeholder.svg',
                blue: '../assets/img/600x400placeholder.svg',
                green: '../assets/img/600x400placeholder.svg'
            },
            classes: [
                {
                    classId: 1,
                    color: 'Purple',
                    // banner: '../assets/img/jean-beller-RjfVzePmmfM-unsplash.jpg',
                    banner: 'https://placehold.co/2400x400/purple/white',
                    // logo: '../assets/img/purple-dragon.webp',
                    logo: 'https://placehold.co/600x400/lavender/white',
                    bio: 'The purple class is filled with the most talented, fun students in the entire program. We convene on Monday and Wednesday nights. We come from a variety of backgrounds and places, though most of us live in the western states.'
                }, {
                    classId: 2,
                    color: 'Gray',
                    banner: '../assets/img/600x400placeholder.svg',
                    logo: '../assets/img/600x400placeholder.svg',
                    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repellendus tempora nemo error sed ipsam in, repudiandae aliquam! Enim, mollitia molestiae. Voluptatum expedita doloremque odio rem perspiciatis veniam dolorum ea.'
                }, {
                    classId: 3,
                    color: 'Blue',
                    banner: '../assets/img/600x400placeholder.svg',
                    logo: '../assets/img/600x400placeholder.svg',
                    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repellendus tempora nemo error sed ipsam in, repudiandae aliquam! Enim, mollitia molestiae. Voluptatum expedita doloremque odio rem perspiciatis veniam dolorum ea.'
                }, {
                    classId: 4,
                    color: 'Green',
                    banner: '../assets/img/600x400placeholder.svg',
                    logo: '../assets/img/600x400placeholder.svg',
                    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repellendus tempora nemo error sed ipsam in, repudiandae aliquam! Enim, mollitia molestiae. Voluptatum expedita doloremque odio rem perspiciatis veniam dolorum ea.'
                }
            ],
            students: [
                { 
                    name: "Brandon Cheuk",
                    fanPageUrl: "https://brandgc.github.io/fan-page/",
                    studentId: 1,
                    classColor: 'Purple'
                }, { 
                    name: "Charlie McNeece",   
                    fanPageUrl: "https://itsboblemon.github.io/nlr-7-fan-page/", 
                    studentId: 2,
                    classColor: 'Purple'
                }, { 
                    name: "Guangyuan Sun",     
                    fanPageUrl: "https://gysungrad.github.io/fan-page/",
                    studentId: 3,
                    classColor: 'Purple'
                 }, { 
                    name: "Justin Wong",       
                    fanPageUrl: "https://jwong209.github.io/shredders-revenge-fanpage/",
                    studentId: 4,
                    classColor: 'Purple'
                }, { 
                    name: "Kyros Dailey",      
                    fanPageUrl: "https://kyrosd.github.io/fan-page-mkgee/",
                    studentId: 5,
                    classColor: 'Purple'
                }, { 
                    name: "Lena Johnson",      
                    fanPageUrl: "https://lenajhnsn.github.io/fan-page/",
                    studentId: 6,
                    classColor: 'Purple'
                }, { 
                    name: "Maia Sanders",      
                    fanPageUrl: "https://maiasanders.github.io/who-is-who-fan-page/",
                    studentId: 7,
                    classColor: 'Purple'
                }, { 
                    name: "Regis Knox",        
                    fanPageUrl: "https://bigreeg1089.github.io/fan-page/",
                    studentId: 8,
                    classColor: 'Purple'
            }, { 
                name: "Tyler Mullin",      
                fanPageUrl: "https://tylermullin.github.io/fan-page/",
                studentId: 9,
                classColor: 'Purple' 
            }
            ]
        },
        mutations: {

        },
        actions: {},
        modules: {}

    })
}