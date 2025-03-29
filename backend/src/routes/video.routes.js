import {Router} from 'express';
import { getSkillVideos } from '../controllers/video.controller.js';

const router = Router();

router.get('/:skillId', getSkillVideos);

export default router;