var db=require('../dbConfig')




exports.getQuiz=(req,res,next)=>{
    console.log('-----------')
    var subject= req.params.subject;
    db.execute('Select * from quiz, subject where subject_id=?',[subject])
    .then(
        ep=>{
            console.log(ep[0])
            res.json({error:false,quiz:ep[0]})
            next();
        }
    ).catch(err=>{
        
        console.log(err);
        res.json({error:true,message:"Connection Error Occured"})
        next(err);
    })
}

exports.addQuiz=(req,res,next)=>{
    console.log(req.body)
    var {question,Subject_subject_id,opt1,opt2,opt3,opt4,answer}= req.body;

    db.execute('insert into quiz (question,Subject_subject_id,opt1,opt2,opt3,opt4,answer) values (?,?,?,?,?,?,?)',
    [
        question,Subject_subject_id,opt1,opt2,opt3,opt4,answer
    ]   
    ).then(quiz=>{
        console.log("Quiz is added ",quiz)
        res.json({message:'Quiz Added',quiz:quiz})
        next();
    }).catch(err=>{
        console.log(err);
        res.json({message:'Connection Error'})
        next(err)
    })
}

exports.getSubjects=(req,res,next)=>{
    db.execute('Select * from subject')
    .then(
        ep=>{
            console.log(ep[0])
            res.json({subject:ep[0]})
            next();
        }
    ).catch(err=>{
        console.log(err);
        res.json({message:'Connection Error'})
        next(err);
    })   
}

exports.addSubject=(req,res,next)=>{
    console.log(req.body)
    var subject_name=req.body.subject_name;
    console.log(subject_name)
    db.execute('insert into subject (subject_name) values (?)',[subject_name])
    .then(sub=>{
        console.log("Subject is added ",sub)
        res.json({message:'Subject Added',subject:sub})
        next();
    }).catch(err=>{
        console.log(err)
        next(err)
    })
}