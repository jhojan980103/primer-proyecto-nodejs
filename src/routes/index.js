import {Router} from 'express'
const router = Router()

router.get('/',(req, res) => res.render('index'))
router.get('/abaut',(req, res) => res.render('abaut'))
router.get('/contact',(req, res) => res.render('contact'))

export default router