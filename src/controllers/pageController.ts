import express, { Request, Response } from 'express'
import { objectActive } from '../helpers/menuActive'
import { PetManipulation } from '../models/pet'


const app = express()

export const home = (req: Request, res: Response)=> {
    let list= PetManipulation.getAll();

    res.render('pages/pages',{
        menu: objectActive('all'),
        banner: {
            title: 'Todos os animais',
            background:'allanimals.jpg'
        },
        list
    });
}

export const catController = (req: Request, res: Response)=> {
    let list= PetManipulation.getType('cat');

    res.render('pages/pages',{
        menu:objectActive('cat'),
        banner: {
            title: 'Gatos',
            background:'banner_cat.jpg'
        },
       list
    });
}

export const dogController = (req: Request, res: Response)=> { 
    let list= PetManipulation.getType('dog');

    res.render('pages/pages',{
        menu: objectActive('dog'),
        banner: {
            title: 'Cachorros',
            background:'banner_dog.jpg'
        },
        list
    });
}

export const fishController = (req: Request, res: Response)=> {
    let list= PetManipulation.getType('fish');

    res.render('pages/pages',{
        menu: objectActive('fish'),
        banner: {
            title: 'Peixes',
            background:'banner_fish.jpg'
        },
        list
    });
}