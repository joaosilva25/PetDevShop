import {Router, Request, Response} from 'express'
import * as PageController from '../controllers/pageController'
import * as SearchController from '../controllers/searchController'

const router= Router();

router.get('/', PageController.home);

router.get('/dogs', PageController.dogController)

router.get('/fishes', PageController.fishController)

router.get('/cats', PageController.catController)

router.get('/search', SearchController.search)

export default router