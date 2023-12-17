import { addDoc, collection  } from "firebase/firestore"
import { db } from "../../config/firebaseConfig";

const products = [
    {
        id: 1, 
        title: 'Sgt. Peppers Lonely Hearts Club Band', 
        artist: 'The Beatles',
        genre: 'Rock & Roll',
        category: 'Rock',
        stock: 10,
        year: 1967, 
        price: 10.99, 
        pictureUrl: '/assets/beatlesalbum.png'
    },
    {
        id: 2, 
        title: 'Elvis Presley 30 #1 Hits', 
        artist: 'Elvis Presley',
        genre: 'Compilation',
        category: 'Rock',
        stock: 10,
        year: 2002,
        price: 20.99, 
        pictureUrl: '/assets/elvisalbum.png' 
    },
    {
        id: 3, 
        title: 'Artaud', 
        artist: 'Luis Alberto Spinetta',
        genre: 'Rock & Roll',
        category: 'Rock',
        stock: 10,
        year: 1973,
        price: 10.99, 
        pictureUrl: '/assets/artaud.png'
    },
    {
        id: 4, 
        title: 'The Dark Side of the Moon', 
        artist: 'Pink Floyd',
        genre: 'Rock & Roll',
        category: 'Rock',
        stock: 10,
        year: 1973, 
        price: 15.99, 
        pictureUrl: '/assets/pinkfloydalbum.png'
    },
    {
        id: 5, 
        title: 'Clics Modernos', 
        artist: 'Charly García',
        genre: 'Rock & Roll',
        category: 'Rock',
        stock: 10,
        year: 1983, 
        price: 10.99, 
        pictureUrl: '/assets/clicsmodernos.png'
    },
    {
        id: 6, 
        title: 'Rubber Soul', 
        artist: 'The Beatles',
        genre: 'Rock & Roll',
        category: 'Rock',
        stock: 10,
        year: 1965,  
        price: 10.99, 
        pictureUrl: '/assets/rubbersoul.png'
    },
    {
        id: 7, 
        title: 'Thriller', 
        artist: 'Michael Jackson',
        genre: 'Pop',
        category: 'Pop',
        stock: 10,
        year: 1982, 
        price: 20.99, 
        pictureUrl: '/assets/thriller.png'
    },
    {
        id: 8, 
        title: 'Como conseguir chicas', 
        artist: 'Charly García', 
        genre: 'Rock & Roll',
        category: 'Pop',
        stock: 10,
        year: 1989,
        price: 15.99, 
        pictureUrl: '/assets/comoconseguirchicas.png'
    },
    {
        id: 9, 
        title: 'Kind Of Blue', 
        artist: 'Miles Davis',
        genre: 'Jazz',
        stock: 10,
        category: 'Jazz',
        year: 1959, 
        price: 10.99, 
        pictureUrl: '/assets/kindofblue.png'
    }
];

export const seedProducts = () => {

    products.forEach(product => {
        addDoc( collection(db, "products"), product );
    });
}

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        if (products.length > 0) {
            const product = products.find( p => p.id === Number(id));

            setTimeout(() => {
                if(!product) {
                    reject(`No se encuentra el productos con el id ${id}`)
                }
                    resolve(product);
            }, 2000);
        } else {
            reject("No hay productos");
        }
    });
};