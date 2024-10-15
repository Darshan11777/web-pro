import exress from 'express'

import db from '../database/db.js'
import { getFormData } from '../controller/table.controller.js';

const router=exress.Router()


  router.get( '/:table', getFormData)
  export default router;    
  