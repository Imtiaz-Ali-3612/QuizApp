var router =require('express').Router(),
    quizController=require('../controller/quizController');


    

router.get('/find/:subject',quizController.getQuiz)
router.post('/',quizController.addQuiz)
router.get('/subject',quizController.getSubjects);
router.post('/subject',quizController.addSubject);
// router.get('/myrecipe',verifyUser.verifyToken,recipeController.getMyRecipe)



module.exports=router;