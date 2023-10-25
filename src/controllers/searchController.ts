import express, { Request, Response } from 'express'
import { objectActive } from '../helpers/menuActive'
import { PetManipulation } from '../models/pet'

const app = express()

export const search= (req: Request, res: Response)=> {
    let busca:string= req.query.q as string

    if( busca == '') {
        res.redirect('/')
        return
    }

    let list= PetManipulation.getName(busca);

    res.render('pages/pages', {
        menu: objectActive(''),
        list,
        busca
    })
}